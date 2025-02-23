import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './gesture-handler';
import './global.css';

import { AvatarUI } from '@/AvatarUI';
import { ButtonUI } from '@/ButtonUI';
import { GamePlanUI } from '@/GamePlanUI';
import { TagUI } from '@/TagUI';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { cx } from '@/lib/utils';
import { CaretRight } from '@/svg/CaretRight';

const Drawer = createDrawerNavigator();

const CustomDrawer = ({ navigation }: { navigation: any }) => {
	return (
		<SafeAreaView className="flex-1 px-4">
			<Button
				onPress={() => navigation.navigate('Button')}
				className="flex-row items-start justify-between"
				suffix={<Icon icon={<CaretRight />} />}
				size="xl"
				variant="ghost">
				Button
			</Button>
			<Button
				onPress={() => navigation.navigate('Avatar')}
				suffix={<Icon icon={<CaretRight />} />}
				className="flex-row items-start justify-between"
				size="xl"
				variant="ghost">
				Avatar
			</Button>
			<Button
				onPress={() => navigation.navigate('Tag')}
				suffix={<Icon icon={<CaretRight />} />}
				className="flex-row items-start justify-between"
				size="xl"
				variant="ghost">
				Tag
			</Button>
			<Button
				onPress={() => navigation.navigate('GamePlan')}
				suffix={<Icon icon={<CaretRight />} />}
				className="flex-row items-start justify-between"
				size="xl"
				variant="ghost">
				Game Plan
			</Button>
		</SafeAreaView>
	);
};

function MyDrawer() {
	return (
		<Drawer.Navigator
			initialRouteName="GamePlan"
			screenOptions={{ headerShown: false }}
			drawerContent={(props) => <CustomDrawer {...props} />}>
			<Drawer.Screen name="Button" component={ButtonUI} />
			<Drawer.Screen name="Avatar" component={AvatarUI} />
			<Drawer.Screen name="Tag" component={TagUI} />
			<Drawer.Screen name="GamePlan" component={GamePlanUI} />
		</Drawer.Navigator>
	);
}

export default function App() {
	const colorScheme = useColorScheme();
	return (
		<NavigationContainer>
			<SafeAreaProvider>
				<Animated.View
					className={cx('flex-1', colorScheme === 'dark' ? 'bg-black dark' : 'bg-white')}>
					<StatusBar style="auto" />
					<MyDrawer />
				</Animated.View>
			</SafeAreaProvider>
		</NavigationContainer>
	);
}
