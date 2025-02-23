import { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import Animated, { FadeIn, FadeOut, SlideInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Avatar } from './components/ui/avatar';
import { AvatarGroup } from './components/ui/avatarGroup';
import { Button } from './components/ui/button';
import Icon from './components/ui/icon';
import { cx } from './lib/utils';
import { Calendar } from './svg/Calendar';
import { CaretDown } from './svg/CaretDown';
import { Sort } from './svg/Sort';
import { Switcher } from './svg/Switcher';

const Header = () => {
	const { top } = useSafeAreaInsets();
	return (
		<View className="flex-row items-center justify-between px-4 pt-2" style={{ paddingTop: top }}>
			<Animated.View className="flex-row justify-between items-center gap-2">
				<Avatar
					className="bg-[#FFBEB8]"
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_3.png' }}
					size="3xl"
				/>
				<Animated.View className="">
					<Animated.Text className="text-[12px] font-regular text-[#383838]">
						Today 23, February
					</Animated.Text>
					<Animated.Text className="text-[20px] font-medium text-[#171717]">
						Welcome Andy
					</Animated.Text>
				</Animated.View>
			</Animated.View>
			<Button scaleAnimationEnabled={false} suffix={<CaretDown />} variant="subtle" size="md">
				This week
			</Button>
		</View>
	);
};

const RecentProjects = () => {
	return (
		<Animated.View className="pt-8">
			<Animated.View className="flex-row justify-between items-center px-4 ">
				<Animated.Text className="text-base font-semibold">Recent Projects</Animated.Text>
				<Button variant="subtle" size="md">
					View all
				</Button>
			</Animated.View>
			<Animated.ScrollView
				contentContainerClassName="px-4"
				showsHorizontalScrollIndicator={false}
				horizontal
				className="flex-row pt-3.5">
				<Animated.View className="w-[210px] rounded-xl bg-white border border-[#EDEDED] px-3 py-2">
					<Animated.Text className="text-base font-medium text-[#383838]">Release</Animated.Text>
					<Animated.Text className="text-[14px] pt-1 text-[#535353] font-normal">
						🔆 Project
					</Animated.Text>
					<Animated.View className="mt-2">
						<AvatarGroup max={3} size="xl">
							<Avatar
								className="bg-[#FFBEB8]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_3.png' }}
							/>
							<Avatar
								className="bg-[#CEC3FF]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_2.png' }}
							/>
							<Avatar
								className="bg-[#FFCC8A]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_3.png' }}
							/>
							<Avatar
								className="bg-[#FFCC8A]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_3.png' }}
							/>
							<Avatar
								className="bg-[#FFBEB8]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_1.png' }}
							/>
						</AvatarGroup>
					</Animated.View>
				</Animated.View>
				<Animated.View className="w-[210px] rounded-xl bg-white border border-[#EDEDED] px-3 py-2 ml-3">
					<Animated.Text className="text-base font-medium text-[#383838]">General</Animated.Text>
					<Animated.Text className="text-[14px] pt-1 text-[#535353] font-normal">
						🪝 Open FLC
					</Animated.Text>
					<Animated.View className="mt-2">
						<AvatarGroup size="xl">
							<Avatar
								className="bg-[#FFE5B8]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_12.png' }}
							/>
							<Avatar
								className="bg-[#FFF2B9]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_13.png' }}
							/>
							<Avatar
								className="bg-[#D1FFF4]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_14.png' }}
							/>
							<Avatar
								className="bg-[#FFBEB8]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_10.png' }}
							/>
						</AvatarGroup>
					</Animated.View>
				</Animated.View>
				<Animated.View className="w-[210px] rounded-xl bg-white border border-[#EDEDED] px-3 py-2 ml-3">
					<Animated.Text className="text-base font-medium text-[#383838]">
						Documentation
					</Animated.Text>
					<Animated.Text className="text-[14px] pt-1 text-[#535353] font-normal">
						♠ Update
					</Animated.Text>
					<Animated.View className="mt-2">
						<AvatarGroup max={3} size="xl">
							<Avatar
								className="bg-[#E0B8FF]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_16.png' }}
							/>
							<Avatar
								className="bg-[#FFF7B8]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png' }}
							/>
							<Avatar
								className="bg-[#CEC3FF]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_20.png' }}
							/>
							<Avatar
								className="bg-[#FFDCB9]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_15.png' }}
							/>
							<Avatar
								className="bg-[#FFBEB8]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_1.png' }}
							/>
							<Avatar
								className="bg-[#FFBEB8]"
								src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_1.png' }}
							/>
						</AvatarGroup>
					</Animated.View>
				</Animated.View>
			</Animated.ScrollView>
		</Animated.View>
	);
};

const tasksListItems = [
	{
		id: 1,
		priority: 'High',
		title: 'Version 14 Release',
		description: 'Release new version of the app',
		dueDate: '2025-03-01',
		isPastDueDate: false,
	},
	{
		id: 2,
		priority: 'Medium',
		title: 'API Documentation',
		description: 'Write comprehensive API documentation',
		dueDate: '2025-02-23',
		isPastDueDate: true,
	},
	{
		id: 3,
		priority: 'Low',
		title: 'Bug Fixes',
		description: 'Address reported bugs in latest release',
		dueDate: '2025-02-27',
		isPastDueDate: true,
	},
	{
		id: 4,
		priority: 'High',
		title: 'Security Audit',
		description: 'Conduct security review of codebase',
		dueDate: '2025-03-12',
		isPastDueDate: false,
	},
	{
		id: 5,
		priority: 'Medium',
		title: 'Performance Optimization',
		description: 'Optimize app performance and loading times',
		dueDate: '2025-03-05',
		isPastDueDate: false,
	},
	{
		id: 6,
		priority: 'High',
		title: 'User Testing',
		description: 'Coordinate user testing sessions',
		dueDate: '2025-03-09',
		isPastDueDate: false,
	},
	{
		id: 7,
		priority: 'Low',
		title: 'Analytics Integration',
		description: 'Implement analytics tracking',
		dueDate: '2025-03-13',
		isPastDueDate: false,
	},
	{
		id: 8,
		priority: 'Medium',
		title: 'UI Components',
		description: 'Create reusable UI component library',
		dueDate: '2025-03-24',
		isPastDueDate: false,
	},
	{
		id: 9,
		priority: 'High',
		title: 'Database Migration',
		description: 'Migrate to new database structure',
		dueDate: '2025-03-28',
		isPastDueDate: false,
	},
	// {
	//   id: 10,
	//   priority: 'Medium',
	//   title: 'Accessibility Review',
	//   description: 'Ensure WCAG compliance across app',
	//   dueDate: '2025-03-06',
	// },
	// {
	//   id: 11,
	//   priority: 'Low',
	//   title: 'Code Refactoring',
	//   description: 'Clean up and optimize codebase',
	//   dueDate: '2025-03-07',
	// },
];

const conversationListItems = [
	{
		id: 1,
		name: 'Howard Stark',
		lastMessage:
			'Hi there, I accidentally purchased the wrong item. Can I cancel the order and get a refund?',
		lastMessageTime: 'Now',
		avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_3.png',
		avatarBg: '#E0B8FF',
	},
	{
		id: 2,
		name: 'Kathryn Murphy',
		lastMessage:
			'Hi there, I accidentally purchased the wrong item. Can I cancel the order and get a refund?',
		lastMessageTime: 'Now',
		avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_1.png',
		avatarBg: '#FFF7B8',
	},
	{
		id: 3,
		name: 'Sarah Parker',
		lastMessage:
			'Hi there, I accidentally purchased the wrong item. Can I cancel the order and get a refund?',
		lastMessageTime: 'Now',
		avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_2.png',
		avatarBg: '#FFDCB9',
	},
	{
		id: 4,
		name: 'Dianne Russel',
		lastMessage:
			'Hi there, I accidentally purchased the wrong item. Can I cancel the order and get a refund?',
		lastMessageTime: 'Now',
		avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_13.png',
		avatarBg: '#FFBEB8',
	},
	{
		id: 5,
		name: 'Marvin McKinney',
		lastMessage:
			'Hi there, I accidentally purchased the wrong item. Can I cancel the order and get a refund?',
		lastMessageTime: 'Now',
		avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_8.png',
		avatarBg: '#CEC3FF',
	},
];
const ConversationList = () => {
	return (
		<Animated.View className="pt-5 px-4">
			{conversationListItems.map((item) => (
				<Animated.View key={item.id} className="flex-row items-center gap-2 ">
					<Avatar
						className={`h-[56px] w-[56px] bg-[${item.avatarBg}] `}
						src={{ uri: item.avatar }}
						size="3xl"
					/>
					<Animated.View className="py-3 border-b-[1px] border-[#EDEDED]" style={{ flex: 1 }}>
						<Animated.View className="flex-row justify-between items-center">
							<Text className="text-[15px] font-semibold text-[#171717]">Howard Stark</Text>
							<Text className="text-[12px] font-normal text-[#6F6F6F]">Now</Text>
						</Animated.View>
						<Text numberOfLines={2} className="text-[15px] font-normal text-[#6F6F6F] pt-1">
							Hi there, I accidentally purchased the wrong item. Can I cancel the order and get a
							refund?
						</Text>
					</Animated.View>
				</Animated.View>
			))}
		</Animated.View>
	);
};

const TaskList = () => {
	return (
		<Animated.View key={2} className="px-4 pt-5">
			<Animated.View className="flex-row justify-between items-center px-2.5 min-h-8 bg-[#F3F3F3] rounded-lg">
				<Text className="text-[#7C7C7C] w-[60%]">Task</Text>
				<Text className="text-[#7C7C7C] w-[20%]">Priority</Text>
				<Text className="text-[#7C7C7C] text-start w-[20%]">Due Date</Text>
			</Animated.View>
			<Animated.View
				entering={SlideInDown.delay(100).springify().damping(34).stiffness(300)}
				exiting={FadeOut.duration(100)}
				className="mt-2">
				{tasksListItems.map((item, index) => (
					<Animated.View
						className="flex-row justify-between items-center min-h-11 border-b-[1px] border-[#EDEDED] px-3"
						key={item.id}>
						<Text className="w-[60%] text-[#171717] text-[14px] font-normal">{item.title}</Text>
						<Text className="w-[20%] text-[#525252] text-[14px] font-normal">{item.priority}</Text>
						<Animated.View className="flex-row justify-start items-end w-[20%]">
							<Icon
								color={item.isPastDueDate ? '#E03636' : '#383838'}
								icon={<Calendar />}
								size={16}
							/>
							<Text
								className={cx(
									'text-[14px] font-normal text-[#383838] pl-2',
									item.isPastDueDate ? 'text-[#E03636]' : ''
								)}>
								{formatDate(item.dueDate)}
							</Text>
						</Animated.View>
					</Animated.View>
				))}
				<Animated.View className="flex-row justify-center items-center min-h-11 px-3 mt-2">
					<Button variant="subtle" size="sm">
						Show all
					</Button>
				</Animated.View>
			</Animated.View>
		</Animated.View>
	);
};

const formatDate = (date: string) => {
	const options = { month: 'short', day: 'numeric' };
	return new Date(date).toLocaleDateString('en-US', options);
};
const MyTasks = () => {
	const refPagerView = useRef<PagerView>(null);
	const [isSwitcherActive, setIsSwitcherActive] = useState<'My Tasks' | 'My Discussions'>(
		'My Tasks'
	);
	const handleToggle = () => {
		if (isSwitcherActive === 'My Tasks') {
			refPagerView.current?.setPage(1);
		} else {
			refPagerView.current?.setPage(0);
		}
		setIsSwitcherActive(isSwitcherActive === 'My Tasks' ? 'My Discussions' : 'My Tasks');
	};
	return (
		<Animated.View className="flex-1 pt-8">
			<Animated.View className="flex flex-row justify-between items-center px-4">
				{isSwitcherActive === 'My Tasks' ? (
					<Animated.View entering={FadeIn} exiting={FadeOut.duration(100)}>
						<Button
							onPress={handleToggle}
							size="lg"
							variant="ghost"
							suffix={<Icon className="mt-[2px]" icon={<Switcher fill="#383838" />} size={16} />}
							textClassName="text-[18px] font-semibold">
							{isSwitcherActive}
						</Button>
					</Animated.View>
				) : null}
				{isSwitcherActive === 'My Discussions' ? (
					<Animated.View entering={FadeIn} exiting={FadeOut.duration(100)}>
						<Button
							onPress={handleToggle}
							size="lg"
							variant="ghost"
							suffix={<Icon className="mt-[2px]" icon={<Switcher fill="#383838" />} size={16} />}
							textClassName="text-[18px] font-semibold">
							{isSwitcherActive}
						</Button>
					</Animated.View>
				) : null}
				<Animated.View className="flex flex-row justify-center items-center gap-2">
					<Button variant="subtle" prefix={<Sort />} size="sm">
						Upcoming
					</Button>
				</Animated.View>
			</Animated.View>
			<PagerView ref={refPagerView} style={{ flex: 1 }}>
				<Animated.View key={1}>
					<ConversationList />
				</Animated.View>
				<Animated.View key={2}>
					<TaskList />
				</Animated.View>
			</PagerView>
		</Animated.View>
	);
};

export const GamePlanUI = () => {
	return (
		<Animated.View className="flex-1 bg-ink-white">
			<Header />
			<RecentProjects />
			<MyTasks />
		</Animated.View>
	);
};
