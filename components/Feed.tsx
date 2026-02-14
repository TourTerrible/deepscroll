"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { ContentItem, seedContent } from "@/data/seedContent";
import { getFeedItems } from "@/lib/getFeedItems";
import FeedItem from "./FeedItem";

// Extract unique categories from seed data
const ALL_CATEGORIES = Array.from(
    new Set(seedContent.map((item) => item.category))
).sort();

// LocalStorage key for seen items
const SEEN_IDS_KEY = "deepscroll-seen-ids";

export default function Feed() {
    const [items, setItems] = useState<ContentItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [seenIds, setSeenIds] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const loadingRef = useRef(false);

    // Load seen IDs from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(SEEN_IDS_KEY);
        if (stored) {
            try {
                setSeenIds(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse seen IDs:", e);
            }
        }
    }, []);

    // Save seen IDs to localStorage whenever they change
    useEffect(() => {
        if (seenIds.length > 0) {
            localStorage.setItem(SEEN_IDS_KEY, JSON.stringify(seenIds));
        }
    }, [seenIds]);

    // Mark items as seen when they're added to the feed
    useEffect(() => {
        if (items.length > 0) {
            const newSeenIds = items.map((item) => item.id);
            setSeenIds((prev) => {
                const combined = [...new Set([...prev, ...newSeenIds])];
                return combined;
            });
        }
    }, [items]);

    // Initial load
    useEffect(() => {
        loadMoreItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Infinite scroll detection
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            if (loadingRef.current || !hasMore) return;

            const { scrollTop, scrollHeight, clientHeight } = container;
            const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

            if (scrollPercentage > 0.8) {
                loadMoreItems();
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasMore]);

    const loadMoreItems = async () => {
        if (loadingRef.current) return;

        loadingRef.current = true;
        setIsLoading(true);

        try {
            const newItems = await getFeedItems(items.length, 10, seenIds);

            if (newItems.length === 0) {
                setHasMore(false);
            } else {
                setItems((prev) => [...prev, ...newItems]);
            }
        } catch (error) {
            console.error("Failed to load items:", error);
        } finally {
            setIsLoading(false);
            loadingRef.current = false;
        }
    };

    // Filter items by category
    const filteredItems = useMemo(() => {
        if (!activeCategory) return items;
        return items.filter((item) => item.category === activeCategory);
    }, [items, activeCategory]);

    // Reset scroll to top when filter changes
    useEffect(() => {
        containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }, [activeCategory]);

    return (
        <div className="h-screen w-full flex flex-col">
            {/* Category filter bar */}
            <div
                className="w-full shrink-0 z-20"
                style={{
                    borderBottom: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-bg)",
                }}
            >
                <div className="max-w-[620px] mx-auto px-6 md:px-0">
                    <div className="flex items-center gap-1 py-3 overflow-x-auto no-scrollbar">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className="shrink-0 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all"
                            style={{
                                backgroundColor: !activeCategory
                                    ? "var(--color-accent)"
                                    : "transparent",
                                color: !activeCategory
                                    ? "#ffffff"
                                    : "var(--color-text-muted)",
                                border: !activeCategory
                                    ? "1px solid var(--color-accent)"
                                    : "1px solid var(--color-border)",
                            }}
                        >
                            All
                        </button>
                        {ALL_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() =>
                                    setActiveCategory(activeCategory === cat ? null : cat)
                                }
                                className="shrink-0 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all"
                                style={{
                                    backgroundColor:
                                        activeCategory === cat
                                            ? "var(--color-accent)"
                                            : "transparent",
                                    color:
                                        activeCategory === cat
                                            ? "#ffffff"
                                            : "var(--color-text-muted)",
                                    border:
                                        activeCategory === cat
                                            ? "1px solid var(--color-accent)"
                                            : "1px solid var(--color-border)",
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feed content */}
            <div
                ref={containerRef}
                className="flex-1 overflow-y-scroll snap-y snap-mandatory no-scrollbar"
            >
                {filteredItems.length === 0 && !isLoading && (
                    <div className="h-full w-full flex items-center justify-center">
                        <p
                            className="text-sm"
                            style={{ color: "var(--color-text-muted)" }}
                        >
                            No items in this category yet.
                        </p>
                    </div>
                )}

                {filteredItems.map((item, idx) => (
                    <FeedItem key={item.id} item={item} index={idx} />
                ))}

                {isLoading && (
                    <div className="h-screen w-full snap-start flex items-center justify-center">
                        <div
                            className="animate-pulse text-sm"
                            style={{ color: "var(--color-text-muted)" }}
                        >
                            Loading...
                        </div>
                    </div>
                )}

                {!hasMore && filteredItems.length > 0 && (
                    <div className="h-screen w-full snap-start flex items-center justify-center">
                        <div className="text-center space-y-2 px-6">
                            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                                You&apos;ve reached the end.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
