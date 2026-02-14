import { ContentItem, seedContent } from "@/data/seedContent";

/**
 * Abstracted content loader interface
 * Currently returns seed data, but can be extended to support:
 * - OpenAI API generation
 * - Supabase/Firebase
 * - Notion API
 * - Any CMS
 */
export async function getFeedItems(
    offset: number = 0,
    limit: number = 10
): Promise<ContentItem[]> {
    // Simulate API delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Return paginated seed content
    const items = seedContent.slice(offset, offset + limit);

    // TODO: Add support for dynamic content sources
    // TODO: Implement caching strategy
    // TODO: Add error handling and retry logic

    return items;
}

/**
 * Get total count of available items
 */
export async function getFeedItemCount(): Promise<number> {
    return seedContent.length;
}
