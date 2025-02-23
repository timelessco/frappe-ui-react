"use client";

import * as React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EnhancedCodeBlock } from "@/components/enhanced-codeblock";
import { cn } from "@/lib/utils";

import { OpenInV0Button } from "./open-in-v0-button";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
	component: React.ReactNode;
	name: string;
}

export function ComponentPreview({
	name,
	component,
	children,
	className,
	...props
}: ComponentPreviewProps) {
	return (
		<div className={cn("not-prose", className)} {...props}>
			<Tabs defaultValue="preview" className="w-full space-y-4" dir="ltr">
				<TabsList className=" justify-start">
					<TabsTrigger value="preview">Preview</TabsTrigger>
					<TabsTrigger value="code">Code</TabsTrigger>
				</TabsList>
				<TabsContent
					value="preview"
					className="rounded-lg border p-6 shadow-sm"
				>
					<div className="flex items-center justify-end">
						<OpenInV0Button name={name} />
					</div>
					<div className="flex min-h-[350px] items-center justify-center">
						{component}
					</div>
				</TabsContent>
				<TabsContent value="code">
					<EnhancedCodeBlock>
						{React.isValidElement(children) &&
						"props" in
							(children as { props?: { children?: React.ReactNode } }) &&
						(children as { props?: { children?: React.ReactNode } }).props &&
						typeof (children as { props?: { children?: React.ReactNode } })
							.props === "object"
							? (children as { props: { children: React.ReactNode } }).props
									.children
							: children}
					</EnhancedCodeBlock>
				</TabsContent>
			</Tabs>
		</div>
	);
}
