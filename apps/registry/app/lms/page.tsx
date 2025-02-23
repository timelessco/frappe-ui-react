import React from "react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenuGameplan } from "@/components/dropdown-menu-gameplan";
import { ModeToggle } from "@/components/mode-toggle";
import { Navbar } from "@/components/navbar";
import { AddIcon } from "@/icons/line/add";
import { CourseIcon } from "@/icons/line/course";
import { FilterIcon } from "@/icons/line/filter";
import { PeopleIcon } from "@/icons/line/people";
import { SearchIcon } from "@/icons/line/search";
import { ShareIcon } from "@/icons/line/share";
import { SmallDownIcon } from "@/icons/line/small-down";
import { StarIcon } from "@/icons/line/star";

import CourseImg1 from "./_images/course-img-1.png";
import CourseImg2 from "./_images/course-img-2.png";
import CourseImg3 from "./_images/course-img-3.png";
import CourseImg4 from "./_images/course-img-4.png";
import CourseImg5 from "./_images/course-img-5.png";
import CourseImg6 from "./_images/course-img-6.png";
import CourseImg7 from "./_images/course-img-7.png";

const LmsPage = () => {
	return (
		<>
			<Navbar />
			<div>
				<div className="border-b border-outline-gray-1">
					<div className="relative mx-auto w-full max-w-[540px] px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px]">
						<nav className="mx-auto flex items-center justify-between py-2.5">
							<p className="flex items-center justify-between text-ef-lg font-ef-medium leading-[115%] tracking-[0.24px] text-ink-gray-8">
								Home
								{/* <ModeToggle /> */}
							</p>
							<div className="flex items-center gap-3">
								<Button variant="subtle" prefix={<ShareIcon />}>
									Share
								</Button>
								<Button variant="solid" prefix={<AddIcon />}>
									New Courses
								</Button>
								<ModeToggle />
							</div>
						</nav>
					</div>
				</div>
				<div className="h-[calc(100vh-49px)] overflow-scroll p-5">
					<div className="relative mx-auto w-full max-w-[540px] px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px]">
						<div className="mb-5 flex items-center justify-between">
							<p className="flex items-center justify-between text-ef-lg font-ef-medium leading-[115%] tracking-[0.24px] text-ink-gray-8">
								All
							</p>
							<div className="flex items-center gap-3">
								<DropdownMenuGameplan>
									<Button
										variant="subtle"
										suffix={<SmallDownIcon />}
										prefix={<FilterIcon />}
									>
										Filter
									</Button>
								</DropdownMenuGameplan>
								<Button variant="subtle" iconOnly={<SearchIcon />} />
							</div>
						</div>
						<div className="-mx-2 flex flex-wrap items-center justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start">
							<div className="p-2">
								<div className="h-full min-w-[330px] max-w-[330px] rounded-ef-6 bg-surface-white shadow-[0px_0px_1px_0px_rgba(0,0,0,0.45),0px_1px_2px_0px_rgba(0,0,0,0.10)] dark:border dark:border-outline-gray-1 md:max-w-full lg:min-w-[298px] lg:max-w-[298px] xl:min-w-[280px] xl:max-w-[280px]">
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
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>S</AvatarFallback>
											</Avatar>
											<p className="ml-2 text-ef-base font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-7">
												Sally potter
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="p-2">
								<div className="h-full min-w-[330px] max-w-[330px] rounded-ef-6 bg-surface-white shadow-[0px_0px_1px_0px_rgba(0,0,0,0.45),0px_1px_2px_0px_rgba(0,0,0,0.10)] dark:border dark:border-outline-gray-1 md:max-w-full lg:min-w-[298px] lg:max-w-[298px] xl:min-w-[280px] xl:max-w-[280px]">
									<Image
										src={CourseImg2}
										alt="Course"
										className="w-full rounded-lg"
									/>
									<div className="mt-4 flex min-h-[212px] flex-col justify-between p-4">
										<div>
											<p className="flex items-center text-ef-base font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-7">
												<PeopleIcon className="mr-2" /> 28K Students ·{" "}
												<CourseIcon className="ml-1 mr-2" />
												12 Lessons
											</p>
											<h3 className="flex items-center justify-between pb-1.5 pt-2.5 text-ef-lg font-ef-semibold leading-[150%] tracking-[0.24px] text-ink-gray-8">
												<span className="line-clamp-2">
													Introducing frappe LMS
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
													5.0 (1425 Rating)
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
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>S</AvatarFallback>
											</Avatar>
											<p className="ml-2 text-ef-base font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-7">
												Sally potter
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="p-2">
								<div className="h-full min-w-[330px] max-w-[330px] rounded-ef-6 bg-surface-white shadow-[0px_0px_1px_0px_rgba(0,0,0,0.45),0px_1px_2px_0px_rgba(0,0,0,0.10)] dark:border dark:border-outline-gray-1 md:max-w-full lg:min-w-[298px] lg:max-w-[298px] xl:min-w-[280px] xl:max-w-[280px]">
									<Image
										src={CourseImg3}
										alt="Course"
										className="w-full rounded-lg"
									/>
									<div className="mt-4 flex min-h-[212px] flex-col justify-between p-4">
										<div>
											<p className="flex items-center text-ef-base font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-7">
												<PeopleIcon className="mr-2" /> 2K Students ·{" "}
												<CourseIcon className="ml-1 mr-2" />8 Lessons
											</p>
											<h3 className="flex items-center justify-between pb-1.5 pt-2.5 text-ef-lg font-ef-semibold leading-[150%] tracking-[0.24px] text-ink-gray-8">
												<span className="line-clamp-2">Peace of mind</span>
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
													5.0 (482 Rating)
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
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>S</AvatarFallback>
											</Avatar>
											<p className="ml-2 text-ef-base font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-7">
												Sally potter
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="p-2">
								<div className="h-full min-w-[330px] max-w-[330px] rounded-ef-6 bg-surface-white shadow-[0px_0px_1px_0px_rgba(0,0,0,0.45),0px_1px_2px_0px_rgba(0,0,0,0.10)] dark:border dark:border-outline-gray-1 md:max-w-full lg:min-w-[298px] lg:max-w-[298px] xl:min-w-[280px] xl:max-w-[280px]">
									<Image
										src={CourseImg4}
										alt="Course"
										className="w-full rounded-lg"
									/>
									<div className="mt-4 flex min-h-[212px] flex-col justify-between p-4">
										<div>
											<p className="flex items-center text-ef-base font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-7">
												<PeopleIcon className="mr-2" /> 17K Students ·{" "}
												<CourseIcon className="ml-1 mr-2" />6 Lessons
											</p>
											<h3 className="flex items-center justify-between pb-1.5 pt-2.5 text-ef-lg font-ef-semibold leading-[150%] tracking-[0.24px] text-ink-gray-8">
												<span className="line-clamp-2">
													Useful Excel for Beginners
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
													5.0 (649 Rating)
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
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>S</AvatarFallback>
											</Avatar>
											<p className="ml-2 text-ef-base font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-7">
												Sally potter
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="p-2">
								<div className="h-full min-w-[330px] max-w-[330px] rounded-ef-6 bg-surface-white shadow-[0px_0px_1px_0px_rgba(0,0,0,0.45),0px_1px_2px_0px_rgba(0,0,0,0.10)] dark:border dark:border-outline-gray-1 md:max-w-full lg:min-w-[298px] lg:max-w-[298px] xl:min-w-[280px] xl:max-w-[280px]">
									<Image
										src={CourseImg5}
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
													A Mini Course on Time Management
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
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>S</AvatarFallback>
											</Avatar>
											<p className="ml-2 text-ef-base font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-7">
												Sally potter
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="p-2">
								<div className="h-full min-w-[330px] max-w-[330px] rounded-ef-6 bg-surface-white shadow-[0px_0px_1px_0px_rgba(0,0,0,0.45),0px_1px_2px_0px_rgba(0,0,0,0.10)] dark:border dark:border-outline-gray-1 md:max-w-full lg:min-w-[298px] lg:max-w-[298px] xl:min-w-[280px] xl:max-w-[280px]">
									<Image
										src={CourseImg6}
										alt="Course"
										className="w-full rounded-lg"
									/>
									<div className="mt-4 flex min-h-[212px] flex-col justify-between p-4">
										<div>
											<p className="flex items-center text-ef-base font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-7">
												<PeopleIcon className="mr-2" /> 22K Students ·{" "}
												<CourseIcon className="ml-1 mr-2" />
												18 Lessons
											</p>
											<h3 className="flex items-center justify-between pb-1.5 pt-2.5 text-ef-lg font-ef-semibold leading-[150%] tracking-[0.24px] text-ink-gray-8">
												<span className="line-clamp-2">
													Introducing frappe LMS
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
													5.0 (942 Rating)
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
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>S</AvatarFallback>
											</Avatar>
											<p className="ml-2 text-ef-base font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-7">
												Sally potter
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="p-2">
								<div className="h-full min-w-[330px] max-w-[330px] rounded-ef-6 bg-surface-white shadow-[0px_0px_1px_0px_rgba(0,0,0,0.45),0px_1px_2px_0px_rgba(0,0,0,0.10)] dark:border dark:border-outline-gray-1 md:max-w-full lg:min-w-[298px] lg:max-w-[298px] xl:min-w-[280px] xl:max-w-[280px]">
									<Image
										src={CourseImg7}
										alt="Course"
										className="w-full rounded-lg"
									/>
									<div className="mt-4 flex min-h-[212px] flex-col justify-between p-4">
										<div>
											<p className="flex items-center text-ef-base font-[420] leading-[115%] tracking-[0.28px] text-ink-gray-7">
												<PeopleIcon className="mr-2" /> 26K Students ·{" "}
												<CourseIcon className="ml-1 mr-2" />
												44Lessons
											</p>
											<h3 className="flex items-center justify-between pb-1.5 pt-2.5 text-ef-lg font-ef-semibold leading-[150%] tracking-[0.24px] text-ink-gray-8">
												<span className="line-clamp-2">
													Master Digital Product Design: UX Research & UI...
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
													5.0 (1442 Rating)
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
												<AvatarImage src="https://github.com/shadcn.png" />
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
		</>
	);
};

export default LmsPage;
