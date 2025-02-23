import Link from "next/link";

import {
	Avatar,
	AvatarFallback,
	AvatarIcon,
	AvatarImage,
} from "@/components/ui/avatar";
import {
	AvatarGroup,
	AvatarLabel,
	AvatarLabelGroup,
} from "@/components/ui/avatar-group";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { DropdownMenuComp } from "@/components/dropdown-menu-comp";
import { ModeToggle } from "@/components/mode-toggle";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { SmallDownIcon } from "@/icons/line/small-down";
import { SmallRightChevronIcon } from "@/icons/line/small-right-chevron";
import { SortIcon } from "@/icons/line/sort";
import { PlaceholderIcon } from "@/icons/placeholder";
import { UserIcon } from "@/icons/solid/user";

export default function Home() {
	return (
		<div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
			<header className="relative flex flex-col gap-1">
				<h1 className="text-3xl font-bold tracking-tight">Kitchen Sink</h1>
				<p className="text-outline-gray-5">
					A collection of components to test the frappe-ui-react library.
				</p>
				<ModeToggle className="absolute right-2 top-4" />
			</header>
			<main className="flex flex-1 flex-col gap-8">
				{/* Badge Component */}
				<div className="relative flex flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-outline-gray-5 sm:pl-3">
							A badge component
						</h2>
						<OpenInV0Button name="badge" className="w-fit" />
					</div>
					<div className="relative flex flex-col items-center justify-center gap-4">
						{/* Solid badges */}
						<div className="flex items-center gap-4">
							<Badge size="sm">Badge</Badge>
							<Badge size="sm" prefix={<PlaceholderIcon />}>
								Badge
							</Badge>
							<Badge size="sm" suffix={<PlaceholderIcon />}>
								Badge
							</Badge>
							<Badge
								size="sm"
								prefix={<PlaceholderIcon />}
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
						</div>
						<div className="flex items-center gap-4">
							<Badge theme="blue">Badge</Badge>
							<Badge theme="blue" prefix={<PlaceholderIcon />}>
								Badge
							</Badge>
							<Badge theme="blue" suffix={<PlaceholderIcon />}>
								Badge
							</Badge>
							<Badge
								theme="blue"
								prefix={<PlaceholderIcon />}
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
						</div>
						<div className="flex items-center gap-4">
							<Badge theme="green" size="lg">
								Badge
							</Badge>
							<Badge theme="green" size="lg" prefix={<PlaceholderIcon />}>
								Badge
							</Badge>
							<Badge theme="green" size="lg" suffix={<PlaceholderIcon />}>
								Badge
							</Badge>
							<Badge
								theme="green"
								size="lg"
								prefix={<PlaceholderIcon />}
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
						</div>

						{/* Subtle badges */}
						<div className="flex items-center gap-4">
							<Badge theme="amber" variant="subtle" size="sm">
								Badge
							</Badge>
							<Badge
								theme="amber"
								variant="subtle"
								size="sm"
								prefix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
							<Badge
								theme="amber"
								variant="subtle"
								size="sm"
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
							<Badge
								theme="amber"
								variant="subtle"
								size="sm"
								prefix={<PlaceholderIcon />}
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
						</div>
						<div className="flex items-center gap-4">
							<Badge theme="red" variant="subtle">
								Badge
							</Badge>
							<Badge theme="red" variant="subtle" prefix={<PlaceholderIcon />}>
								Badge
							</Badge>
							<Badge theme="red" variant="subtle" suffix={<PlaceholderIcon />}>
								Badge
							</Badge>
							<Badge
								theme="red"
								variant="subtle"
								prefix={<PlaceholderIcon />}
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
						</div>
						<div className="flex items-center gap-4">
							<Badge theme="violet" variant="subtle" size="lg">
								Badge
							</Badge>
							<Badge
								theme="violet"
								variant="subtle"
								size="lg"
								prefix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
							<Badge
								theme="violet"
								variant="subtle"
								size="lg"
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
							<Badge
								theme="violet"
								variant="subtle"
								size="lg"
								prefix={<PlaceholderIcon />}
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
						</div>

						{/* Outline badges */}
						<div className="flex items-center gap-4">
							<Badge variant="outline" size="sm">
								Badge
							</Badge>
							<Badge variant="outline" size="sm" prefix={<PlaceholderIcon />}>
								Badge
							</Badge>
							<Badge variant="outline" size="sm" suffix={<PlaceholderIcon />}>
								Badge
							</Badge>
							<Badge
								variant="outline"
								size="sm"
								prefix={<PlaceholderIcon />}
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
						</div>
						<div className="flex items-center gap-4">
							<Badge theme="blue" variant="outline">
								Badge
							</Badge>
							<Badge
								theme="blue"
								variant="outline"
								prefix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
							<Badge
								theme="blue"
								variant="outline"
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
							<Badge
								theme="blue"
								variant="outline"
								prefix={<PlaceholderIcon />}
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
						</div>
						<div className="flex items-center gap-4">
							<Badge theme="green" variant="outline" size="lg">
								Badge
							</Badge>
							<Badge
								theme="green"
								variant="outline"
								size="lg"
								prefix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
							<Badge
								theme="green"
								variant="outline"
								size="lg"
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
							<Badge
								theme="green"
								variant="outline"
								size="lg"
								prefix={<PlaceholderIcon />}
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
						</div>

						{/* Ghost badges */}
						<div className="flex items-center gap-4">
							<Badge theme="amber" variant="ghost" size="sm">
								Badge
							</Badge>
							<Badge
								theme="amber"
								variant="ghost"
								size="sm"
								prefix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
							<Badge
								theme="amber"
								variant="ghost"
								size="sm"
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
							<Badge
								theme="amber"
								variant="ghost"
								size="sm"
								prefix={<PlaceholderIcon />}
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
						</div>
						<div className="flex items-center gap-4">
							<Badge theme="red" variant="ghost">
								Badge
							</Badge>
							<Badge theme="red" variant="ghost" prefix={<PlaceholderIcon />}>
								Badge
							</Badge>
							<Badge theme="red" variant="ghost" suffix={<PlaceholderIcon />}>
								Badge
							</Badge>
							<Badge
								theme="red"
								variant="ghost"
								prefix={<PlaceholderIcon />}
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
						</div>
						<div className="flex items-center gap-4">
							<Badge theme="violet" variant="ghost" size="lg">
								Badge
							</Badge>
							<Badge
								theme="violet"
								variant="ghost"
								size="lg"
								prefix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
							<Badge
								theme="violet"
								variant="ghost"
								size="lg"
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
							<Badge
								theme="violet"
								variant="ghost"
								size="lg"
								prefix={<PlaceholderIcon />}
								suffix={<PlaceholderIcon />}
							>
								Badge
							</Badge>
						</div>
					</div>
				</div>

				{/* Avatar Group Component */}
				<div className="relative flex flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-outline-gray-5 sm:pl-3">
							An avatar group component
						</h2>
						<OpenInV0Button name="avatar-group" className="w-fit" />
					</div>
					<div className="relative flex flex-col items-center justify-center gap-4">
						<AvatarGroup size="xs" max={3}>
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
						</AvatarGroup>
						<AvatarGroup size="sm" max={3}>
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
						</AvatarGroup>
						<AvatarGroup size="md" max={3}>
							<Avatar>
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
							<Avatar>
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
							<Avatar>
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
							<Avatar>
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
						</AvatarGroup>
						<AvatarGroup size="lg" max={3}>
							<Avatar>
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
							<Avatar>
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
							<Avatar>
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
							<Avatar>
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
						</AvatarGroup>
						<AvatarGroup size="xl" max={3}>
							<Avatar>
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar>
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar>
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar>
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
						</AvatarGroup>
						<AvatarLabelGroup size="2xl">
							<AvatarLabel>4 members</AvatarLabel>
							<AvatarGroup size="2xl" max={3}>
								<Avatar>
									<AvatarFallback>N</AvatarFallback>
								</Avatar>
								<Avatar>
									<AvatarFallback>N</AvatarFallback>
								</Avatar>
								<Avatar>
									<AvatarFallback>N</AvatarFallback>
								</Avatar>
								<Avatar>
									<AvatarFallback>N</AvatarFallback>
								</Avatar>
							</AvatarGroup>
						</AvatarLabelGroup>
						<AvatarLabelGroup size="3xl">
							<AvatarLabel>4 members</AvatarLabel>
							<AvatarGroup max={3}>
								<Avatar>
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>N</AvatarFallback>
								</Avatar>
								<Avatar>
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>N</AvatarFallback>
								</Avatar>
								<Avatar>
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>N</AvatarFallback>
								</Avatar>
								<Avatar>
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>N</AvatarFallback>
								</Avatar>
							</AvatarGroup>
						</AvatarLabelGroup>
					</div>
				</div>

				{/* Avatar Component */}
				<div className="relative flex flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-outline-gray-5 sm:pl-3">
							An avatar component
						</h2>
						<OpenInV0Button name="avatar" className="w-fit" />
					</div>
					<div className="relative flex flex-col items-center justify-center gap-4">
						<div className="flex items-center gap-4">
							<Avatar size="xs">
								<AvatarImage src="https://github.com/shadcn.png" />
							</Avatar>
							<Avatar size="sm">
								<AvatarImage src="https://github.com/shadcn.png" />
							</Avatar>
							<Avatar size="md">
								<AvatarImage src="https://github.com/shadcn.png" />
							</Avatar>
							<Avatar size="lg">
								<AvatarImage src="https://github.com/shadcn.png" />
							</Avatar>
							<Avatar size="xl">
								<AvatarImage src="https://github.com/shadcn.png" />
							</Avatar>
							<Avatar size="2xl">
								<AvatarImage src="https://github.com/shadcn.png" />
							</Avatar>
							<Avatar size="3xl">
								<AvatarImage src="https://github.com/shadcn.png" />
							</Avatar>
							<Avatar size="xs">
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar size="sm">
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar size="md">
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar size="lg">
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar size="xl">
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar size="2xl">
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<Avatar size="3xl">
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
						</div>
						<div className="flex items-center gap-4">
							<Avatar size="xs" status="active">
								<AvatarImage src="https://github.com/shadcn.png" />
							</Avatar>
							<Avatar size="sm" status="away">
								<AvatarImage src="https://github.com/shadcn.png" />
							</Avatar>
							<Avatar size="md" status="sleep">
								<AvatarImage src="https://github.com/shadcn.png" />
							</Avatar>
							<Avatar size="lg" status="pinned">
								<AvatarImage src="https://github.com/shadcn.png" />
							</Avatar>
							<Avatar size="xl" status="pin">
								<AvatarImage src="https://github.com/shadcn.png" />
							</Avatar>
							<Avatar size="2xl" status="active">
								<AvatarImage src="https://github.com/shadcn.png" />
							</Avatar>
							<Avatar size="3xl" status="active">
								<AvatarImage src="https://github.com/shadcn.png" />
							</Avatar>

							<Avatar size="xs" squared status="active">
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
							<Avatar size="sm" squared status="active">
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
							<Avatar size="md" squared status="away">
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
							<Avatar size="lg" squared status="away">
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
							<Avatar size="xl" squared status="sleep">
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
							<Avatar size="2xl" squared status="pinned">
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
							<Avatar size="3xl" squared status="pin">
								<AvatarIcon>
									<UserIcon />
								</AvatarIcon>
							</Avatar>
						</div>
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
						<ButtonGroup>
							<Button>Day</Button>
							<Button>Day</Button>
							<Button>Day</Button>
							<Button>Day</Button>
						</ButtonGroup>
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

				{/* Icon Component */}
				<div className="relative flex flex-col gap-4 rounded-lg border p-4">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-outline-gray-5 sm:pl-3">
							An icon component
						</h2>
						<OpenInV0Button name="icon" className="w-fit" />
					</div>
					<div className="relative flex items-center justify-center gap-2">
						<PlaceholderIcon />
						<SmallRightChevronIcon />
						<SmallDownIcon />
						<SortIcon />
						<UserIcon />
					</div>
				</div>
			</main>
		</div>
	);
}
