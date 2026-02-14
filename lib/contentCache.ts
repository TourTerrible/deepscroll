import { ContentItem } from "@/data/seedContent";

// In-memory cache for AI-generated content
class ContentCache {
    private cache: ContentItem[] = [];
    private isGenerating: boolean = false;
    private nextId: number = 1000; // Start IDs at 1000 to avoid conflicts with seed content

    // Get items from cache, excluding seen IDs
    getItems(count: number, seenIds: string[] = []): ContentItem[] {
        const unseenItems = this.cache.filter(
            (item) => !seenIds.includes(item.id)
        );
        const items = unseenItems.slice(0, count);

        // Remove returned items from cache
        this.cache = this.cache.filter((item) => !items.includes(item));

        return items;
    }

    // Add items to cache
    addItems(items: ContentItem[]): void {
        this.cache.push(...items);
    }

    // Check if cache needs replenishment
    needsReplenishment(): boolean {
        return this.cache.length < 20;
    }

    // Get cache size
    size(): number {
        return this.cache.length;
    }

    // Check if currently generating
    isCurrentlyGenerating(): boolean {
        return this.isGenerating;
    }

    // Set generating flag
    setGenerating(value: boolean): void {
        this.isGenerating = value;
    }

    // Generate unique ID
    generateId(): string {
        return `ai-${this.nextId++}`;
    }
}

// Singleton instance
export const contentCache = new ContentCache();
