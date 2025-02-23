import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { Button } from "@/components/ui/button";
import { DropdownMenuGameplan } from "@/components/dropdown-menu-gameplan";
import { ModeToggle } from "@/components/mode-toggle";
import { SmallDownIcon } from "@/icons/line/small-down";
import { SortIcon } from "@/icons/line/sort";

const GamePlanPage = () => {
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
		<div>
			<div className="border-b border-outline-gray-1">
				<div className="relative mx-auto w-full max-w-[540px] px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
					<nav className="mx-auto py-5 xl:max-w-[900px]">
						<p className="flex items-center justify-between text-ef-lg font-ef-medium leading-[115%] tracking-[0.24px]">
							Home
							<ModeToggle />
						</p>
					</nav>
				</div>
			</div>
			<div className="h-[calc(100vh-70px)] overflow-scroll">
				<div className="relative mx-auto w-full max-w-[540px] px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
					<div className="mx-auto size-full py-8 xl:max-w-[900px]">
						{/* topbar block starts */}
						<div className="mb-8 flex flex-col items-start justify-between sm:flex-row sm:items-center">
							<div className="flex w-full items-center pb-3 sm:pb-0">
								<Avatar size="3xl">
									<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png" />
									<AvatarFallback>S</AvatarFallback>
								</Avatar>
								<div className="pl-3">
									<p className="pb-[5px] text-[12px] font-[420] leading-[115%] tracking-[0.24px] text-ink-gray-7">
										Today, 1 June
									</p>
									<p className="text-[20px] font-ef-semibold leading-[115%] tracking-[0.2px] text-ink-gray-8">
										Welcome Sally
									</p>
								</div>
							</div>
							<div>
								<DropdownMenuGameplan>
									<Button variant="subtle" suffix={<SmallDownIcon />}>
										This week
									</Button>
								</DropdownMenuGameplan>
							</div>
						</div>
						{/* topbar block ends */}
						{/* recent project block starts */}
						<div>
							<div className="flex items-center justify-between">
								<p className="text-[16px] font-ef-semibold leading-[115%] tracking-[0.24px] text-ink-gray-7">
									Recent projects
								</p>
								<Button variant="subtle">View all</Button>
							</div>
							<div className="flex flex-wrap items-center space-y-3 py-2.5 sm:-m-2 sm:space-y-0 md:flex-nowrap">
								<div className="w-full sm:w-1/2 sm:p-2">
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
								<div className="w-full sm:w-1/2 sm:p-2">
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
								<div className="w-full sm:w-1/2 sm:p-2">
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
								<div className="w-full sm:w-1/2 sm:p-2">
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
						</div>
						{/* recent project block ends */}
						{/* task and discussion block starts */}
						<div className="mt-2.5 flex flex-wrap gap-5 lg:flex-nowrap">
							<div className="w-full rounded-ef-6 border border-outline-gray-1 p-4 md:mx-auto md:w-2/3 lg:w-1/2">
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
										<Button variant="subtle">View all</Button>
									</div>
								</div>
								<div className="overflow-x-auto">
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
							<div className="w-full rounded-ef-6 border border-outline-gray-1 p-4 md:mx-auto md:w-2/3 lg:w-1/2">
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
										<Button variant="subtle">View all</Button>
									</div>
								</div>
								<div>
									<div className="flex flex-col items-start border-b border-outline-gray-1 py-2.5 pl-3 pr-2.5 sm:flex-row sm:items-center">
										<Avatar size="3xl">
											<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_34.png" />
											<AvatarFallback>S</AvatarFallback>
										</Avatar>
										<div className="my-2.5 flex-1 sm:my-0 sm:px-3">
											<h3 className="max-w-[230px] truncate pb-1.5 text-[14px] font-ef-semibold leading-[115%] tracking-[0.21px] text-ink-gray-8 sm:pb-2.5">
												Conference feedback and summary...
											</h3>
											<p className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-5">
												Me: We have been passionately...
											</p>
										</div>
										<span className="text-[13px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6">
											12 mins ago
										</span>
									</div>
									<div className="flex flex-col items-start border-b border-outline-gray-1 py-2.5 pl-3 pr-2.5 sm:flex-row sm:items-center">
										<Avatar size="3xl">
											<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_18.png" />
											<AvatarFallback>S</AvatarFallback>
										</Avatar>
										<div className="my-2.5 flex-1 sm:my-0 sm:px-3">
											<h3 className="max-w-[230px] truncate pb-1.5 text-[14px] font-ef-semibold leading-[115%] tracking-[0.21px] text-ink-gray-8 sm:pb-2.5">
												Internal call purpose - Conf’23
											</h3>
											<p className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-5">
												Rushabh: The monthly statistics for...
											</p>
										</div>
										<span className="text-[13px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6">
											9 mins ago
										</span>
									</div>
									<div className="flex flex-col items-start border-b border-outline-gray-1 py-2.5 pl-3 pr-2.5 sm:flex-row sm:items-center">
										<Avatar size="3xl">
											<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_31.png" />
											<AvatarFallback>S</AvatarFallback>
										</Avatar>
										<div className="my-2.5 flex-1 sm:my-0 sm:px-3">
											<h3 className="max-w-[230px] truncate pb-1.5 text-[14px] font-ef-semibold leading-[115%] tracking-[0.21px] text-ink-gray-8 sm:pb-2.5">
												Customer hiring support
											</h3>
											<p className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-5">
												Faris: Let me move content from ...
											</p>
										</div>
										<span className="text-[13px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6">
											48 mins ago
										</span>
									</div>
									<div className="flex flex-col items-start border-b border-outline-gray-1 py-2.5 pl-3 pr-2.5 sm:flex-row sm:items-center">
										<Avatar size="3xl">
											<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_35.png" />
											<AvatarFallback>S</AvatarFallback>
										</Avatar>
										<div className="my-2.5 flex-1 sm:my-0 sm:px-3">
											<h3 className="max-w-[230px] truncate pb-1.5 text-[14px] font-ef-semibold leading-[115%] tracking-[0.21px] text-ink-gray-8 sm:pb-2.5">
												Conference feedback and summary...
											</h3>
											<p className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-5">
												Me: We have been passionately...
											</p>
										</div>
										<span className="text-[13px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6">
											12 mins ago
										</span>
									</div>
									<div className="flex flex-col items-start border-b border-outline-gray-1 py-2.5 pl-3 pr-2.5 sm:flex-row sm:items-center">
										<Avatar size="3xl">
											<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png" />
											<AvatarFallback>S</AvatarFallback>
										</Avatar>
										<div className="my-2.5 flex-1 sm:my-0 sm:px-3">
											<h3 className="max-w-[230px] truncate pb-1.5 text-[14px] font-ef-semibold leading-[115%] tracking-[0.21px] text-ink-gray-8 sm:pb-2.5">
												Internal call purpose - Conf’23
											</h3>
											<p className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-5">
												Rushabh: The monthly statistics for...
											</p>
										</div>
										<span className="text-[13px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6">
											45 mins ago
										</span>
									</div>
									<div className="flex flex-col items-start  py-2.5 pl-3 pr-2.5 sm:flex-row sm:items-center">
										<Avatar size="3xl">
											<AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_7.png" />
											<AvatarFallback>S</AvatarFallback>
										</Avatar>
										<div className="my-2.5 flex-1 sm:my-0 sm:px-3">
											<h3 className="max-w-[230px] truncate pb-1.5 text-[14px] font-ef-semibold leading-[115%] tracking-[0.21px] text-ink-gray-8 sm:pb-2.5">
												Customer hiring support
											</h3>
											<p className="text-[14px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-5">
												Faris: Let me move content from ...
											</p>
										</div>
										<span className="text-[13px] font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-6">
											24 mins ago
										</span>
									</div>
								</div>
							</div>
						</div>
						{/* task and discussion block ends */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GamePlanPage;
