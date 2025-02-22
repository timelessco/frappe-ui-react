import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { ButtonGroupComp } from "@/components/button-group-comp";
import { DropdownMenuComp } from "@/components/dropdown-menu-comp";
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
				<div className="relative flex flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-outline-gray-5 sm:pl-3">
							An icon component
						</h2>
						<OpenInV0Button name="icon" className="w-fit" />
					</div>
					<div className="relative flex items-center justify-center">
						<PlaceholderIcon />
					</div>
				</div>

				{/* Button Component */}
				<div className="relative flex flex-col gap-8 rounded-lg border px-4 pb-8 pt-4">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-outline-gray-5 sm:pl-3">
							A button component
						</h2>
						<OpenInV0Button name="button" className="w-fit" />
					</div>

					{/* solid buttons starts */}
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="solid" size="sm">
							Button
						</Button>
						<Button variant="solid" size="sm" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="solid" size="sm" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="solid"
							size="sm"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button variant="solid" size="sm" iconOnly={<PlaceholderIcon />} />
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="solid" size="md">
							Button
						</Button>
						<Button variant="solid" size="md" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="solid" size="md" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="solid"
							size="md"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button variant="solid" size="md" iconOnly={<PlaceholderIcon />} />
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="solid" size="lg">
							Button
						</Button>
						<Button variant="solid" size="lg" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="solid" size="lg" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="solid"
							size="lg"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button variant="solid" size="lg" iconOnly={<PlaceholderIcon />} />
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="solid" size="xl">
							Button
						</Button>
						<Button variant="solid" size="xl" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="solid" size="xl" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="solid"
							size="xl"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button variant="solid" size="xl" iconOnly={<PlaceholderIcon />} />
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="solid" size="2xl">
							Button
						</Button>
						<Button variant="solid" size="2xl" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="solid" size="2xl" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="solid"
							size="2xl"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button variant="solid" size="2xl" iconOnly={<PlaceholderIcon />} />
					</div>
					{/* solid buttons ends */}
					{/* subtle buttons starts */}
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="subtle" size="sm">
							Button
						</Button>
						<Button variant="subtle" size="sm" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="subtle" size="sm" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="subtle"
							size="sm"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button variant="subtle" size="sm" iconOnly={<PlaceholderIcon />} />
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="subtle" size="md">
							Button
						</Button>
						<Button variant="subtle" size="md" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="subtle" size="md" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="subtle"
							size="md"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button variant="subtle" size="md" iconOnly={<PlaceholderIcon />} />
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="subtle" size="lg">
							Button
						</Button>
						<Button variant="subtle" size="lg" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="subtle" size="lg" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="subtle"
							size="lg"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button variant="subtle" size="lg" iconOnly={<PlaceholderIcon />} />
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="subtle" size="xl">
							Button
						</Button>
						<Button variant="subtle" size="xl" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="subtle" size="xl" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="subtle"
							size="xl"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button variant="subtle" size="xl" iconOnly={<PlaceholderIcon />} />
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="subtle" size="2xl">
							Button
						</Button>
						<Button variant="subtle" size="2xl" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="subtle" size="2xl" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="subtle"
							size="2xl"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button
							variant="subtle"
							size="2xl"
							iconOnly={<PlaceholderIcon />}
						/>
					</div>
					{/* subtle buttons ends */}
					{/* outline buttons starts */}
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="outline" size="sm">
							Button
						</Button>
						<Button variant="outline" size="sm" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="outline" size="sm" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="outline"
							size="sm"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button
							variant="outline"
							size="sm"
							iconOnly={<PlaceholderIcon />}
						/>
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="outline" size="md">
							Button
						</Button>
						<Button variant="outline" size="md" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="outline" size="md" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="outline"
							size="md"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button
							variant="outline"
							size="md"
							iconOnly={<PlaceholderIcon />}
						/>
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="outline" size="lg">
							Button
						</Button>
						<Button variant="outline" size="lg" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="outline" size="lg" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="outline"
							size="lg"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button
							variant="outline"
							size="lg"
							iconOnly={<PlaceholderIcon />}
						/>
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="outline" size="xl">
							Button
						</Button>
						<Button variant="outline" size="xl" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="outline" size="xl" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="outline"
							size="xl"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button
							variant="outline"
							size="xl"
							iconOnly={<PlaceholderIcon />}
						/>
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="outline" size="2xl">
							Button
						</Button>
						<Button variant="outline" size="2xl" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="outline" size="2xl" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="outline"
							size="2xl"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button
							variant="outline"
							size="2xl"
							iconOnly={<PlaceholderIcon />}
						/>
					</div>
					{/* outline buttons ends */}
					{/* ghost buttons starts */}
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="ghost" size="sm">
							Button
						</Button>
						<Button variant="ghost" size="sm" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="ghost" size="sm" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="ghost"
							size="sm"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button variant="ghost" size="sm" iconOnly={<PlaceholderIcon />} />
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="ghost" size="md">
							Button
						</Button>
						<Button variant="ghost" size="md" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="ghost" size="md" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="ghost"
							size="md"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button variant="ghost" size="md" asChild>
							<Link href="/">Button</Link>
						</Button>
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="ghost" size="lg">
							Button
						</Button>
						<Button variant="ghost" size="lg" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="ghost" size="lg" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="ghost"
							size="lg"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button variant="ghost" size="lg" iconOnly={<PlaceholderIcon />} />
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="ghost" size="xl">
							Button
						</Button>
						<Button variant="ghost" size="xl" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="ghost" size="xl" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="ghost"
							size="xl"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button variant="ghost" size="xl" iconOnly={<PlaceholderIcon />} />
					</div>
					<div className="relative flex items-center justify-center gap-4">
						<Button variant="ghost" size="2xl">
							Button
						</Button>
						<Button variant="ghost" size="2xl" prefix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button variant="ghost" size="2xl" suffix={<PlaceholderIcon />}>
							Button
						</Button>
						<Button
							variant="ghost"
							size="2xl"
							prefix={<PlaceholderIcon />}
							suffix={<PlaceholderIcon />}
						>
							Button
						</Button>
						<Button variant="ghost" size="2xl" iconOnly={<PlaceholderIcon />} />
					</div>
					{/* ghost buttons ends */}
				</div>

				{/* Button Group Component */}
				<div className="relative flex min-h-[100px] flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-outline-gray-5 sm:pl-3">
							A button group component
						</h2>
						<OpenInV0Button name="button-group" className="w-fit" />
					</div>
					<div className="relative flex min-h-[100px] flex-col items-center justify-center gap-4">
						<ButtonGroupComp />
						<ButtonGroup variant="subtle">
							<Button>Day</Button>
							<Button>Day</Button>
							<Button>Day</Button>
							<Button>Day</Button>
						</ButtonGroup>
						<ButtonGroup variant="outline">
							<Button>Day</Button>
							<Button>Day</Button>
							<Button>Day</Button>
							<Button>Day</Button>
						</ButtonGroup>
						<ButtonGroup variant="ghost">
							<Button>Day</Button>
							<Button>Day</Button>
							<Button>Day</Button>
							<Button>Day</Button>
						</ButtonGroup>
					</div>
				</div>

				{/* Dropdown Menu Component */}
				<div className="relative flex min-h-[100px] flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-outline-gray-5 sm:pl-3">
							A dropdown menu component
						</h2>
						<OpenInV0Button name="dropdown-menu" className="w-fit" />
					</div>
					<div className="relative flex min-h-[100px] items-center justify-center gap-4">
						<DropdownMenuComp />
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
