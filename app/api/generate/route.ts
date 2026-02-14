import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "OpenAI API key not configured" },
                { status: 500 }
            );
        }

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [
                    {
                        role: "system",
                        content:
                            "You are a content generator for an educational micro-learning platform. Generate dense, intellectually rigorous content.",
                    },
                    {
                        role: "user",
                        content: `Generate 5 dense, scroll-optimized micro learning units. Each must:
- Be under 120 words
- Contain a strong opening hook
- Be intellectually rigorous
- Avoid fluff
- No emojis
- No hashtags
- No motivational tone
- Output JSON array with title, body, category

Return ONLY a valid JSON array with this structure:
[{"title": "...", "body": "...", "category": "..."}]`,
                    },
                ],
                temperature: 0.8,
            }),
        });

        if (!response.ok) {
            throw new Error(`OpenAI API error: ${response.statusText}`);
        }

        const data = await response.json();
        const content = data.choices[0]?.message?.content;

        if (!content) {
            throw new Error("No content generated");
        }

        // Parse the JSON response
        const items = JSON.parse(content);

        return NextResponse.json({ items });
    } catch (error) {
        console.error("Generation error:", error);
        return NextResponse.json(
            { error: "Failed to generate content" },
            { status: 500 }
        );
    }
}
