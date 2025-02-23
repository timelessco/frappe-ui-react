import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, StarIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenuGameplan } from "@/components/dropdown-menu-gameplan";
import { ModeToggle } from "@/components/mode-toggle";
import { CourseIcon } from "@/icons/line/course";
import { PeopleIcon } from "@/icons/line/people";
import { SmallDownIcon } from "@/icons/line/small-down";
import { SmallRightChevronIcon } from "@/icons/line/small-right-chevron";
import { SortIcon } from "@/icons/line/sort";
import Logo from "@/icons/logo";

import CourseImg1 from "./lms/_images/course-img-1.png";

const title = "Build your component library";
const description =
	"A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.";

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		images: [
			{
				url: `/og?title=${encodeURIComponent(
					title,
				)}&description=${encodeURIComponent(description)}`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: [
			{
				url: `/og?title=${encodeURIComponent(
					title,
				)}&description=${encodeURIComponent(description)}`,
			},
		],
	},
};

export default function IndexPage() {
	const tasks = [
		{
			name: "Version 14 Release",
			priority: "Low",
			dueDate: "1 Mar",
			status: "in-progress",
			id: "task-1",
		},
		{
			name: "Hyper-verge landing page design",
			priority: "High",
			dueDate: "23 Feb",
			status: "pending",
			id: "task-2",
		},
		{
			name: "Calendar update",
			priority: "Low",
			dueDate: "27 Feb",
			status: "pending",
			id: "task-3",
		},
		{
			name: "New design system",
			priority: "High",
			dueDate: "12 Mar",
			status: "in-progress",
			id: "task-4",
		},
		{
			name: "Client feedback",
			priority: "Low",
			dueDate: "5 Mar",
			status: "pending",
			id: "task-5",
		},
		{
			name: "Version 14 Release date",
			priority: "Low",
			dueDate: "9 Mar",
			status: "pending",
			id: "task-6",
		},
		{
			name: "Version 14 Release date",
			priority: "Medium",
			dueDate: "13 May",
			status: "pending",
			id: "task-7",
		},
		{
			name: "Landing page feedback",
			priority: "Low",
			dueDate: "24 May",
			status: "pending",
			id: "task-8",
		},
		{
			name: "New marketing strategy",
			priority: "High",
			dueDate: "28 May",
			status: "in-progress",
			id: "task-9",
		},
	];

	return (
		<>
			<Navbar />
			<div className="container mx-auto px-4">
				<div className="max-w-[700px] py-10">
					<Badge
						asChild
						theme="blue"
						size="sm"
						prefix={<SmallRightChevronIcon />}
					>
						<Link href="/gameplan">
							Browse examples
							<SmallRightChevronIcon />
						</Link>
					</Badge>
					<h1 className="pb-4 text-[42px] font-ef-bold leading-[115%] tracking-[0.18px] text-ink-gray-8">
						Frappe UI Component Registry
					</h1>
					<p className="max-w-[555px] text-[18px] font-ef-regular leading-[150%] tracking-[0.18px] text-ink-gray-7">
						A design-driven React and React Native component collection built
						with Espresso UI principles and Shadcn compatibility. Offers a
						distributed library of accessible, beautifully-crafted UI elements.
					</p>
					<div className="mt-5 flex items-center space-x-2">
						<Button variant="solid" size="lg" asChild>
							<Link href="/docs">
								Get started
								<SmallRightChevronIcon className="text-lg" />
							</Link>
						</Button>
					</div>
				</div>
				<div className="grid pb-10 md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4">
					<div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
							<div className="w-full overflow-scroll rounded-ef-6 border border-outline-gray-1 p-4 sm:overflow-visible">
								<div className="flex flex-col items-start justify-between space-y-3 pb-4 sm:flex-row sm:items-center sm:space-y-0">
									<p className="text-[18px] font-ef-semibold leading-[115%] tracking-[0.18px] text-ink-gray-8">
										My tasks
									</p>
									<div className="flex items-center gap-1.5">
										<DropdownMenuGameplan>
											<Button
												variant="subtle"
												prefix={<SortIcon />}
												suffix={<SmallDownIcon />}
											>
												Upcoming
											</Button>
										</DropdownMenuGameplan>
										<Button variant="subtle" className="xl:hidden 2xl:block">
											View all
										</Button>
									</div>
								</div>
								<div className="overflow-x-scroll">
									<table className="w-full border-collapse">
										<thead className="rounded-lg bg-surface-gray-2">
											<tr className="text-left text-sm text-gray-500">
												<th className="min-w-[240px] rounded-l-lg py-2 pl-2.5 text-[14px] font-ef-medium leading-[115%] tracking-[0.21px] text-ink-gray-5">
													Task
												</th>
												<th className="min-w-[80px] py-2 text-[14px] font-[420] leading-[115%] tracking-[0.21px] text-ink-gray-5">
													Priority
												</th>
												<th className="min-w-[80px] rounded-r-lg py-2 pr-2.5 text-[14px] font-[420] leading-[115%] tracking-[0.21px] text-ink-gray-5">
													Due date
												</th>
											</tr>
										</thead>
										<tbody>
											{tasks.map((task, index) => (
												<tr
													key={`task-${task.id}`}
													className={
														index === 0 ? "" : "border-t border-outline-gray-1"
													}
												>
													<td className="flex items-center py-[14px] pl-2.5 ">
														{task.status === "in-progress" ? (
															<span className="mr-2.5 text-orange-500">
																&#11044;
															</span>
														) : (
															<span className="mr-2.5 text-gray-400">
																&#9711;
															</span>
														)}
														<span
															className="max-w-[180px] truncate text-[14px] font-ef-medium leading-[115%] tracking-[0.21px] text-ink-gray-8"
															title={task.name}
														>
															{task.name}
														</span>
													</td>
													<td className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6">
														{task.priority}
													</td>
													<td
														className={`py-[14px] pr-2.5 text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6 ${new Date(task.dueDate) < new Date() ? "text-ink-red-3" : ""}`}
													>
														{task.dueDate}
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
							<div className="w-full rounded-ef-6 border border-outline-gray-1 p-4">
								<div className="flex flex-col items-start justify-between space-y-3 pb-4 sm:flex-row sm:items-center sm:space-y-0">
									<p className="text-[18px] font-ef-semibold leading-[115%] tracking-[0.18px] text-ink-gray-8">
										My discussions
									</p>
									<div className="flex items-center gap-1.5">
										<DropdownMenuGameplan>
											<Button
												variant="subtle"
												prefix={<SortIcon />}
												suffix={<SmallDownIcon />}
											>
												Newest
											</Button>
										</DropdownMenuGameplan>
										<Button variant="subtle" className="xl:hidden 2xl:block">
											View all
										</Button>
									</div>
								</div>
								<div>
									<div className="flex flex-col items-start border-b border-outline-gray-1 py-2.5 pl-3 pr-2.5 sm:flex-row sm:items-center">
										<Avatar size="3xl">
											<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_34.png" />
											<AvatarFallback>S</AvatarFallback>
										</Avatar>
										<div className="my-2.5 flex-1 sm:my-0 sm:px-3">
											<h3 className="max-w-[160px] truncate pb-1.5 text-[14px] font-ef-semibold leading-[115%] tracking-[0.21px] text-ink-gray-8 sm:pb-2.5">
												Conference feedback and summary...
											</h3>
											<p className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-5">
												Me: We have been passionately...
											</p>
										</div>
										<span className="text-[13px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6 sm:block md:hidden 2xl:block">
											12 mins ago
										</span>
									</div>
									<div className="flex flex-col items-start border-b border-outline-gray-1 py-2.5 pl-3 pr-2.5 sm:flex-row sm:items-center">
										<Avatar size="3xl">
											<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_18.png" />
											<AvatarFallback>S</AvatarFallback>
										</Avatar>
										<div className="my-2.5 flex-1 sm:my-0 sm:px-3">
											<h3 className="max-w-[160px] truncate pb-1.5 text-[14px] font-ef-semibold leading-[115%] tracking-[0.21px] text-ink-gray-8 sm:pb-2.5">
												Internal call purpose - Conf’23
											</h3>
											<p className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-5">
												Rushabh: The monthly statistics for...
											</p>
										</div>
										<span className="text-[13px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6 sm:block md:hidden 2xl:block">
											9 mins ago
										</span>
									</div>
									<div className="flex flex-col items-start border-b border-outline-gray-1 py-2.5 pl-3 pr-2.5 sm:flex-row sm:items-center">
										<Avatar size="3xl">
											<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_31.png" />
											<AvatarFallback>S</AvatarFallback>
										</Avatar>
										<div className="my-2.5 flex-1 sm:my-0 sm:px-3">
											<h3 className="max-w-[160px] truncate pb-1.5 text-[14px] font-ef-semibold leading-[115%] tracking-[0.21px] text-ink-gray-8 sm:pb-2.5">
												Customer hiring support
											</h3>
											<p className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-5">
												Faris: Let me move content from ...
											</p>
										</div>
										<span className="text-[13px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6 sm:block md:hidden 2xl:block">
											48 mins ago
										</span>
									</div>
									<div className="flex flex-col items-start border-b border-outline-gray-1 py-2.5 pl-3 pr-2.5 sm:flex-row sm:items-center">
										<Avatar size="3xl">
											<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_35.png" />
											<AvatarFallback>S</AvatarFallback>
										</Avatar>
										<div className="my-2.5 flex-1 sm:my-0 sm:px-3">
											<h3 className="max-w-[160px] truncate pb-1.5 text-[14px] font-ef-semibold leading-[115%] tracking-[0.21px] text-ink-gray-8 sm:pb-2.5">
												Conference feedback and summary...
											</h3>
											<p className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-5">
												Me: We have been passionately...
											</p>
										</div>
										<span className="text-[13px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6 sm:block md:hidden 2xl:block">
											12 mins ago
										</span>
									</div>
									<div className="flex flex-col items-start border-b border-outline-gray-1 py-2.5 pl-3 pr-2.5 sm:flex-row sm:items-center">
										<Avatar size="3xl">
											<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png" />
											<AvatarFallback>S</AvatarFallback>
										</Avatar>
										<div className="my-2.5 flex-1 sm:my-0 sm:px-3">
											<h3 className="max-w-[160px] truncate pb-1.5 text-[14px] font-ef-semibold leading-[115%] tracking-[0.21px] text-ink-gray-8 sm:pb-2.5">
												Internal call purpose - Conf’23
											</h3>
											<p className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-5">
												Rushabh: The monthly statistics for...
											</p>
										</div>
										<span className="text-[13px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6 sm:block md:hidden 2xl:block">
											45 mins ago
										</span>
									</div>
									<div className="flex flex-col items-start  py-2.5 pl-3 pr-2.5 sm:flex-row sm:items-center">
										<Avatar size="3xl">
											<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_7.png" />
											<AvatarFallback>S</AvatarFallback>
										</Avatar>
										<div className="my-2.5 flex-1 sm:my-0 sm:px-3">
											<h3 className="max-w-[160px] truncate pb-1.5 text-[14px] font-ef-semibold leading-[115%] tracking-[0.21px] text-ink-gray-8 sm:pb-2.5">
												Customer hiring support
											</h3>
											<p className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-5">
												Faris: Let me move content from ...
											</p>
										</div>
										<span className="text-[13px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6 sm:block md:hidden 2xl:block">
											24 mins ago
										</span>
									</div>
								</div>
							</div>
							<div className="space-y-4 xl:space-y-4">
								<div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
									<DropdownMenuGameplan>
										<Button
											variant="solid"
											size="xl"
											prefix={<SortIcon />}
											suffix={<SmallDownIcon />}
										>
											Dropdown
										</Button>
									</DropdownMenuGameplan>
									<Button variant="outline" size="lg">
										Continue
									</Button>
									<Button variant="subtle" size="md">
										Okay
									</Button>
								</div>
							</div>
							<div className="space-y-4 text-center xl:space-y-4">
								<AvatarGroup className="" size="3xl" max={6}>
									<Avatar>
										<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_34.png" />
										<AvatarFallback>S</AvatarFallback>
									</Avatar>
									<Avatar>
										<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_31.png" />
										<AvatarFallback>S</AvatarFallback>
									</Avatar>
									<Avatar>
										<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png" />
										<AvatarFallback>S</AvatarFallback>
									</Avatar>
									<Avatar>
										<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
										<AvatarFallback>S</AvatarFallback>
									</Avatar>
									<Avatar>
										<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
										<AvatarFallback>S</AvatarFallback>
									</Avatar>
									<Avatar>
										<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png" />
										<AvatarFallback>S</AvatarFallback>
									</Avatar>
									<Avatar>
										<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
										<AvatarFallback>S</AvatarFallback>
									</Avatar>
									<Avatar>
										<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
										<AvatarFallback>S</AvatarFallback>
									</Avatar>
									<Avatar>
										<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
										<AvatarFallback>S</AvatarFallback>
									</Avatar>
								</AvatarGroup>
							</div>
						</div>
					</div>
					<div className="space-y-4 lg:col-span-6 xl:col-span-5 xl:space-y-4">
						<div className=" grid gap-1 sm:grid-cols-[260px_1fr]">
							<div>
								<div className="flex flex-col items-center space-y-3 py-2.5 sm:-m-2 sm:space-y-0 md:flex-nowrap">
									<div className="w-full sm:p-2">
										<div className="w-full rounded-ef-6 border border-outline-gray-1 bg-surface-gray-2 p-3">
											<p className="pb-[5px] text-[16px] font-ef-medium leading-[115%] tracking-[0.24px] text-ink-gray-7">
												Recent projects
											</p>
											<div className="flex items-center pb-2.5">
												<span className="text-[16px] font-ef-medium leading-[115%] tracking-[0.24px] text-ink-gray-7">
													🔆
												</span>
												<p className="pl-1 text-[14px] font-ef-regular leading-[115%] tracking-[0.28px] text-ink-gray-6">
													Product Team
												</p>
											</div>
											<AvatarGroup size="lg" max={3}>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_34.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_31.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
											</AvatarGroup>
										</div>
									</div>
									<div className="w-full sm:p-2">
										<div className="w-full rounded-ef-6 border border-outline-gray-1 bg-surface-white p-3">
											<p className="pb-[5px] text-[16px] font-ef-medium leading-[115%] tracking-[0.24px] text-ink-gray-7">
												General
											</p>
											<div className="flex items-center pb-2.5">
												<span className="text-[16px] font-ef-medium leading-[115%] tracking-[0.24px] text-ink-gray-7">
													🪝
												</span>
												<p className="pl-1 text-[14px] font-ef-regular leading-[115%] tracking-[0.28px] text-ink-gray-6">
													Open FLC
												</p>
											</div>
											<AvatarGroup size="lg" max={4}>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_34.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_31.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
											</AvatarGroup>
										</div>
									</div>
									<div className="w-full sm:p-2">
										<div className="w-full rounded-ef-6 border border-outline-gray-1 bg-surface-white p-3">
											<p className="pb-[5px] text-[16px] font-ef-medium leading-[115%] tracking-[0.24px] text-ink-gray-7">
												Documentation
											</p>
											<div className="flex items-center pb-2.5">
												<span className="text-[16px] font-ef-medium leading-[115%] tracking-[0.24px] text-ink-gray-7">
													🚩
												</span>
												<p className="pl-1 text-[14px] font-ef-regular leading-[115%] tracking-[0.28px] text-ink-gray-6">
													DevOps
												</p>
											</div>
											<AvatarGroup size="lg" max={2}>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_7.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
											</AvatarGroup>
										</div>
									</div>
									<div className="w-full sm:p-2">
										<div className="w-full rounded-ef-6 border border-outline-gray-1 bg-surface-white p-3">
											<p className="pb-[5px] text-[16px] font-ef-medium leading-[115%] tracking-[0.24px] text-ink-gray-7">
												Update
											</p>
											<div className="flex items-center pb-2.5">
												<span className="text-[16px] font-ef-medium leading-[115%] tracking-[0.24px] text-ink-gray-7">
													♠️
												</span>
												<p className="pl-1 text-[14px] font-ef-regular leading-[115%] tracking-[0.28px] text-ink-gray-6">
													Marketing
												</p>
											</div>
											<AvatarGroup size="lg" max={5}>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_7.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<Avatar>
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
											</AvatarGroup>
										</div>
									</div>
								</div>

								<div className="">
									<Button variant="subtle" className="my-1.5 w-full">
										Button
									</Button>
									<Button variant="solid" size="sm" className="my-1.5 w-full">
										Button
									</Button>
									<Button variant="ghost" size="sm" className="my-1.5 w-full">
										Button
									</Button>
									<Button variant="outline" size="sm" className="my-1.5 w-full">
										Button
									</Button>
								</div>
							</div>
							<div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-3">
								<div className="flex flex-col items-start border-b border-outline-gray-1 py-2.5 pl-3 pr-2.5 sm:flex-row sm:items-center">
									<Avatar size="3xl">
										<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png" />
										<AvatarFallback>S</AvatarFallback>
									</Avatar>
									<div className="my-2.5 flex-1 sm:my-0 sm:px-3">
										<h3 className="max-w-[160px] truncate pb-1.5 text-[14px] font-ef-semibold leading-[115%] tracking-[0.21px] text-ink-gray-8 sm:pb-2.5">
											Internal call purpose - Conf’23
										</h3>
										<p className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-5">
											Rushabh: The monthly statistics for...
										</p>
									</div>
									<span className="text-[13px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6 md:block lg:hidden 2xl:block">
										45 mins ago
									</span>
								</div>
								<div className="flex flex-col items-start  py-2.5 pl-3 pr-2.5 sm:flex-row sm:items-center">
									<Avatar size="3xl">
										<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_7.png" />
										<AvatarFallback>S</AvatarFallback>
									</Avatar>
									<div className="my-2.5 flex-1 sm:my-0 sm:px-3">
										<h3 className="max-w-[160px] truncate pb-1.5 text-[14px] font-ef-semibold leading-[115%] tracking-[0.21px] text-ink-gray-8 sm:pb-2.5">
											Customer hiring support
										</h3>
										<p className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-5">
											Faris: Let me move content from ...
										</p>
									</div>
									<span className="text-[13px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6 md:block lg:hidden 2xl:block">
										24 mins ago
									</span>
								</div>
								<div className="mt-10 p-2">
									<div className="h-full min-w-full max-w-full rounded-ef-6 bg-surface-white shadow-[0px_0px_1px_0px_rgba(0,0,0,0.45),0px_1px_2px_0px_rgba(0,0,0,0.10)] dark:border dark:border-outline-gray-1 md:max-w-full lg:min-w-[298px] lg:max-w-[298px] xl:min-w-full xl:max-w-full">
										<Image
											src={CourseImg1}
											alt="Course"
											className="w-full rounded-lg"
										/>
										<div className="mt-4 flex min-h-[212px] flex-col justify-between p-4">
											<div>
												<p className="flex items-center text-ef-base font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-7">
													<PeopleIcon className="mr-2" /> 12K Students ·{" "}
													<CourseIcon className="ml-1 mr-2" />4 Lessons
												</p>
												<h3 className="flex items-center justify-between pb-1.5 pt-2.5 text-ef-lg font-ef-semibold leading-[150%] tracking-[0.24px] text-ink-gray-8">
													<span className="line-clamp-2">
														Java Tutorial for Complete Beginners
													</span>
												</h3>
												<div className="flex items-center">
													<div className="flex items-center">
														<StarIcon className="mr-px" />
														<StarIcon className="mr-px" />
														<StarIcon className="mr-px" />
														<StarIcon className="mr-px" />
														<StarIcon />
													</div>
													<p className="ml-2 flex items-center text-ef-base font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6">
														5.0 (242 Rating)
													</p>
												</div>
												<div className="mt-4 flex items-center">
													<p className="mr-2 text-ef-xl font-ef-semibold leading-[150%] tracking-[0.18px] text-ink-gray-8">
														₹ 699
													</p>
													<p className="text-ef-lg font-[420] leading-[150%] tracking-[0.16px] text-ink-gray-6 line-through">
														₹ 1200
													</p>
												</div>
											</div>
											<div className="mt-6 flex items-center">
												<Avatar size="xs">
													<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_34.png" />
													<AvatarFallback>S</AvatarFallback>
												</Avatar>
												<p className="ml-2 text-ef-base font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-7">
													Sally potter
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container relative mx-auto flex items-center justify-between p-4">
				<div className="flex items-center gap-2">
					<Logo className="text-lg text-ink-gray-8" />
					<Link href="/" className="font-semibold">
						Frappe UI React
					</Link>
				</div>
				<div className="flex items-center gap-4">
					<Link
						target="_blank"
						href="https://github.com/timelessco/frappe-ui-react"
					>
						<Button
							variant="outline"
							iconOnly={
								<GithubIcon className="inline-block size-[1em] shrink-0 align-middle leading-[1em]" />
							}
						/>
					</Link>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
