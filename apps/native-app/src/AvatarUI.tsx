import { SafeAreaView } from 'react-native';
import Animated from 'react-native-reanimated';

import { Avatar } from './components/ui/avatar';
import { AvatarGroup } from './components/ui/avatarGroup';
import { cx } from './lib/utils';

export const AvatarUI = () => {
	return (
		<SafeAreaView className="flex-1 gap-10 justify-center items-center bg-ink-white">
			<Animated.View className={cx('flex-row gap-4 justify-between items-center')}>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_2.png' }}
					size="sm"
				/>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_16.png' }}
					size="md"
				/>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_14.png' }}
					size="lg"
				/>
				<Avatar
					size="xl"
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png' }}
				/>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_5.png' }}
					size="2xl"
					name="John Doe"
				/>

				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_4.png' }}
					size="3xl"
				/>
			</Animated.View>
			<Animated.View className={cx('flex-row gap-4 justify-between items-center')}>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png' }}
					size="3xl"
					status="active"
				/>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png' }}
					size="3xl"
					status="away"
				/>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png' }}
					size="3xl"
					status="sleep"
				/>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png' }}
					size="3xl"
					status="pin"
				/>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png' }}
					size="3xl"
					status="pinned"
				/>
			</Animated.View>
			<AvatarGroup size="3xl" max={3}>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_4.png' }}
					size="3xl"
				/>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_2.png' }}
					size="sm"
				/>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_14.png' }}
					size="md"
				/>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_16.png' }}
					size="lg"
					name="John Doe"
				/>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/upstream_2.png' }}
					size="xl"
				/>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_30.png' }}
					size="2xl"
				/>
				<Avatar
					src={{ uri: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_4.png' }}
					size="3xl"
				/>
			</AvatarGroup>
		</SafeAreaView>
	);
};
