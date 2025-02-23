/* eslint-disable import/no-unassigned-import */
/* eslint-disable tailwindcss/no-custom-classname */

"use client";

import { Check, Copy } from "lucide-react";
import Prism from "prismjs";

import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
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
	language = "typescript",
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

		return String(content as string);
	};

	const codeContent = getStringContent(children).trim();

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
		if (typeof window !== "undefined") {
			Prism.highlightAll();
		}
	}, [codeContent, language]);

	return (
		<div className="relative bg-transparent">
			<div className="absolute right-5 top-6">
				<Button
					variant="subtle"
					onClick={copyToClipboard}
					className="rounded-md border-dashed"
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
					"overflow-x-auto rounded-lg p-4 font-mono text-sm",
					className,
				)}
			>
				<pre className={`language-${language} m-0`}>
					<code className={`language-${language}`}>{codeContent}</code>
				</pre>
			</div>
		</div>
	);
}
