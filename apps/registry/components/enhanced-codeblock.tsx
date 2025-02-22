/* eslint-disable tailwindcss/no-custom-classname */

"use client";

import { Check, Copy } from "lucide-react";
import Prism from "prismjs";

import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/themes/prism-tomorrow.css";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EnhancedCodeBlockProps {
	children: React.ReactNode;
	className?: string;
	language?: string;
}

export function EnhancedCodeBlock({
	children,
	className,
	language = "javascript",
}: EnhancedCodeBlockProps) {
	const [copied, setCopied] = React.useState(false);

	const getStringContent = (content: React.ReactNode): string => {
		if (typeof content === "string") return content;
		if (React.isValidElement(content)) {
			const props = content.props as { children?: React.ReactNode };
			return React.Children.toArray(props.children)
				.map((child) => getStringContent(child))
				.join("");
		}

		if (Array.isArray(content)) {
			return content.map((item) => getStringContent(item)).join("");
		}

		if (content === null || content === undefined) {
			return "";
		}

		if (typeof content === "object") {
			return JSON.stringify(content);
		}

		return String(content);
	};

	const codeContent = getStringContent(children);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(codeContent);
			setCopied(true);
			setTimeout(() => setCopied(false), 2_000);
		} catch (error) {
			console.error("Failed to copy text:", error);
		}
	};

	React.useEffect(() => {
		Prism.highlightAll();
	}, [children, language]);

	return (
		<div className="relative m-0 bg-transparent">
			<div className="absolute right-3 top-3">
				<Button
					variant="subtle"
					onClick={copyToClipboard}
					iconOnly={
						copied ? (
							<Check className="inline-block size-[1em] shrink-0 align-middle leading-[1em]" />
						) : (
							<Copy className="inline-block size-[1em] shrink-0 align-middle leading-[1em]" />
						)
					}
				/>
			</div>
			<div
				className={cn(
					"overflow-x-auto rounded-lg bg-muted/50 font-mono text-sm",
					className,
				)}
			>
				<pre
					className={`language-${language} dark:prism-tomorrow light:prism-solarizedlight border-none`}
				>
					{children}
				</pre>
			</div>
		</div>
	);
}
