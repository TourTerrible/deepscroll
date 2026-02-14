import { NextRequest, NextResponse } from "next/server";
import { contentCache } from "@/lib/contentCache";
import { initializeCache, replenishCacheIfNeeded } from "@/lib/aiContentGenerator";
import { seedContent } from "@/data/seedContent";

// Initialize cache on first request
let cacheInitialized = false;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { count = 10, seenIds = [] } = body;

        // Initialize cache on first request
        if (!cacheInitialized) {
            console.log("First request - initializing cache...");
            initializeCache(); // Don't await - let it run in background
            cacheInitialized = true;

            // Return seed content for first load while cache warms up
            const unseenSeedContent = seedContent.filter(
                (item) => !seenIds.includes(item.id)
            );
            return NextResponse.json({
                items: unseenSeedContent.slice(0, count),
                source: "seed",
            });
        }

        // Get items from cache
        const cachedItems = contentCache.getItems(count, seenIds);

        // Trigger replenishment if needed (async, non-blocking)
        replenishCacheIfNeeded();

        // If we got enough items from cache, return them
        if (cachedItems.length >= count) {
            return NextResponse.json({
                items: cachedItems,
                source: "ai",
                cacheSize: contentCache.size(),
            });
        }

        // If cache doesn't have enough, supplement with seed content
        const unseenSeedContent = seedContent.filter(
            (item) => !seenIds.includes(item.id)
        );

        const supplementItems = unseenSeedContent.slice(
            0,
            count - cachedItems.length
        );

        return NextResponse.json({
            items: [...cachedItems, ...supplementItems],
            source: cachedItems.length > 0 ? "mixed" : "seed",
            cacheSize: contentCache.size(),
        });
    } catch (error) {
        console.error("Error in generate API:", error);

        // Fallback to seed content on error
        return NextResponse.json({
            items: seedContent.slice(0, 10),
            source: "seed-fallback",
            error: "Failed to generate content",
        });
    }
}
