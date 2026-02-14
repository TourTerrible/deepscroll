"use client";

import { ContentItem } from "@/data/seedContent";
import { motion } from "framer-motion";
import { useState } from "react";

interface FeedItemProps {
    item: ContentItem;
    index: number;
}

export default function FeedItem({ item, index }: FeedItemProps) {
    const [isSaved, setIsSaved] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("deepscroll-saved");
            if (saved) {
                const savedIds: string[] = JSON.parse(saved);
                return savedIds.includes(item.id);
            }
        }
        return false;
    });
    const [showCopied, setShowCopied] = useState(false);

    const handleSave = () => {
        if (typeof window === "undefined") return;
        const saved = localStorage.getItem("deepscroll-saved");
        let savedIds: string[] = saved ? JSON.parse(saved) : [];

        if (isSaved) {
            savedIds = savedIds.filter((id) => id !== item.id);
        } else {
            savedIds.push(item.id);
        }

        localStorage.setItem("deepscroll-saved", JSON.stringify(savedIds));
        setIsSaved(!isSaved);
    };

    const handleShare = async () => {
        const shareText = `${item.title}\n\n${item.body}\n\n— via DeepScroll`;

        if (typeof navigator !== "undefined" && navigator.share) {
            try {
                await navigator.share({ title: item.title, text: shareText });
                return;
            } catch {
                // cancelled or unsupported, fall through to clipboard
            }
        }

        try {
            await navigator.clipboard.writeText(shareText);
            setShowCopied(true);
            setTimeout(() => setShowCopied(false), 2000);
        } catch {
            // silently fail
        }
    };

    return (
        <div className="h-screen w-full snap-start flex items-center justify-center">
            <motion.article
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full max-w-[620px] px-6 md:px-0"
            >
                {/* Number indicator */}
                <div
                    className="mb-6 text-sm font-medium tracking-wide"
                    style={{ color: "var(--color-text-muted)" }}
                >
                    {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h2
                    className="text-[28px] md:text-[32px] font-bold leading-[1.2] tracking-tight mb-5"
                    style={{ color: "var(--color-text)" }}
                >
                    {item.title}
                </h2>

                {/* Divider */}
                <div
                    className="w-12 h-[2px] mb-5"
                    style={{ backgroundColor: "var(--color-accent)" }}
                />

                {/* Body */}
                <p
                    className="text-[17px] md:text-[18px] leading-[1.75] mb-6"
                    style={{ color: "var(--color-text-secondary)" }}
                >
                    {item.body}
                </p>

                {/* Optional Image */}
                {item.imageUrl && (
                    <div className="mb-6">
                        <img
                            src={item.imageUrl}
                            alt=""
                            className="w-full max-w-sm h-auto rounded"
                            loading="lazy"
                        />
                    </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-1">
                    {/* Save */}
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors text-sm"
                        style={{ color: isSaved ? "var(--color-accent)" : "var(--color-text-muted)" }}
                        aria-label={isSaved ? "Unsave" : "Save"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill={isSaved ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                        </svg>
                        <span>{isSaved ? "Saved" : "Save"}</span>
                    </button>

                    {/* Divider dot */}
                    <span
                        className="text-xs mx-1"
                        style={{ color: "var(--color-border)" }}
                    >
                        ·
                    </span>

                    {/* Share */}
                    <button
                        onClick={handleShare}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors text-sm relative"
                        style={{ color: "var(--color-text-muted)" }}
                        aria-label="Share"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                            <polyline points="16 6 12 2 8 6" />
                            <line x1="12" y1="2" x2="12" y2="15" />
                        </svg>
                        <span>{showCopied ? "Copied!" : "Share"}</span>
                    </button>
                </div>
            </motion.article>
        </div>
    );
}
