import OpenAI from "openai";
import { ContentItem } from "@/data/seedContent";
import { contentCache } from "./contentCache";

const CATEGORIES = [
    "brain hacks",
    "mind games",
    "deep thoughts",
    "money moves",
    "life hacks",
    "skill unlocks",
    "big brain plays",
    "self care",
];

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Generate a batch of content items
export async function generateContentBatch(
    count: number = 10
): Promise<ContentItem[]> {
    const items: ContentItem[] = [];

    try {
        // Generate items in parallel for speed
        const promises = Array.from({ length: count }, async () => {
            const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];

            const completion = await openai.chat.completions.create({
                model: "gpt-4",
                messages: [
                    {
                        role: "system",
                        content: `You are a content creator for a "counter-doomscrolling" app that delivers enriching micro-content. Generate ONE insightful piece of content in the category: "${category}".

Rules:
- Title: 2-5 words, punchy and memorable
- Body: 2-4 sentences, dense with insight, no fluff
- Style: Clear, direct, thought-provoking
- No emojis, no clickbait
- Focus on timeless wisdom, mental models, or actionable insights

Return ONLY valid JSON in this exact format:
{
  "title": "Your Title Here",
  "body": "Your insightful content here. Keep it concise but profound."
}`,
                    },
                ],
                temperature: 0.9,
                max_tokens: 200,
            });

            const content = completion.choices[0].message.content;
            if (!content) throw new Error("No content generated");

            const parsed = JSON.parse(content);

            return {
                id: contentCache.generateId(),
                title: parsed.title,
                body: parsed.body,
                category,
            };
        });

        const results = await Promise.allSettled(promises);

        // Filter successful results
        results.forEach((result) => {
            if (result.status === "fulfilled") {
                items.push(result.value);
            }
        });

        return items;
    } catch (error) {
        console.error("Error generating content batch:", error);
        return [];
    }
}

// Initialize cache with content
export async function initializeCache(): Promise<void> {
    if (contentCache.isCurrentlyGenerating()) {
        return; // Already generating
    }

    contentCache.setGenerating(true);

    try {
        console.log("Initializing content cache...");
        const items = await generateContentBatch(30); // Generate 30 items initially
        contentCache.addItems(items);
        console.log(`Cache initialized with ${items.length} items`);
    } catch (error) {
        console.error("Failed to initialize cache:", error);
    } finally {
        contentCache.setGenerating(false);
    }
}

// Replenish cache if needed
export async function replenishCacheIfNeeded(): Promise<void> {
    if (contentCache.needsReplenishment() && !contentCache.isCurrentlyGenerating()) {
        contentCache.setGenerating(true);

        try {
            console.log("Replenishing cache...");
            const items = await generateContentBatch(20);
            contentCache.addItems(items);
            console.log(`Cache replenished with ${items.length} items. Total: ${contentCache.size()}`);
        } catch (error) {
            console.error("Failed to replenish cache:", error);
        } finally {
            contentCache.setGenerating(false);
        }
    }
}
