import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ExampleForm } from "@/components/example-form";
import { HelloWorld } from "@/components/hello-world";
import { ModeToggle } from "@/components/mode-toggle";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { PlaceholderIcon } from "@/icons/placeholder";

export default function Home() {
	return (
		<div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
			<header className="relative flex flex-col gap-1">
				<h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
				<p className="text-outline-gray-5">
					A custom registry for distribution code using shadcn.
				</p>
				<ModeToggle className="absolute right-2 top-4" />
			</header>
			<main className="flex flex-1 flex-col gap-8">
				{/* Icon Component */}
				<div className="relative flex min-h-[100px] flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-outline-gray-5 sm:pl-3">
							An icon component
						</h2>
						<OpenInV0Button name="icon" className="w-fit" />
					</div>
					<div className="relative flex min-h-[100px] items-center justify-center">
						<PlaceholderIcon />
					</div>
				</div>

				{/* Button Component */}
				<div className="relative flex min-h-[100px] flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-outline-gray-5 sm:pl-3">
							A button component
						</h2>
						<OpenInV0Button name="button" className="w-fit" />
					</div>
					<div className="relative flex min-h-[100px] items-center justify-center gap-4">
						<Button>Click me</Button>
						<Button prefix={<PlaceholderIcon />}>Click me</Button>
						<Button suffix={<PlaceholderIcon />}>Click me</Button>
						<Button prefix={<PlaceholderIcon />} suffix={<PlaceholderIcon />}>
							Click me
						</Button>
						<Button asChild>
							<Link href="/">Click me</Link>
						</Button>
					</div>
				</div>

				<div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-outline-gray-5 sm:pl-3">
							A simple hello world component
						</h2>
						<OpenInV0Button name="hello-world" className="w-fit" />
					</div>
					<div className="relative flex min-h-[400px] items-center justify-center">
						<HelloWorld />
					</div>
				</div>

				<div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-outline-gray-5 sm:pl-3">
							A contact form with Zod validation.
						</h2>
						<OpenInV0Button name="example-form" className="w-fit" />
					</div>
					<div className="relative flex min-h-[500px] items-center justify-center">
						<ExampleForm />
					</div>
				</div>

				<div className="relative flex flex-col gap-4 rounded-lg py-4">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-outline-gray-5">
							A complex component showing hooks, libs and components.
						</h2>
						<OpenInV0Button name="complex-component" className="w-fit" />
					</div>
					<Link href="/pokemon" className="text-sm text-blue-600">
						Go to Pokemon
					</Link>
				</div>
			</main>
		</div>
	);
}
