import { ContentItem } from "@/data/seedContent";

/**
 * Fetch feed items from the AI content API
 * 
 * @param offset - Not used anymore (kept for compatibility)
 * @param limit - Number of items to fetch
 * @param seenIds - Array of item IDs already seen by the user
 * @returns Array of content items
 */
export async function getFeedItems(
    offset: number = 0,
    limit: number = 10,
    seenIds: string[] = []
): Promise<ContentItem[]> {
    try {
        const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                count: limit,
                seenIds,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch content");
        }

        const data = await response.json();
        console.log(`Fetched ${data.items.length} items from ${data.source}`);

        return data.items;
    } catch (error) {
        console.error("Error fetching feed items:", error);
        return [];
    }
}
