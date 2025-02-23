import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CaretRight } from './svg/CaretRight';

import { Button } from '@/components/ui/button';

export const ButtonUI = () => {
	return (
		<SafeAreaView className="flex-1 gap-4 justify-center items-center bg-ink-white">
			<View className="flex-row gap-[30px]">
				<Button size="lg" variant="solid" className="mb-4">
					Buy this stock
				</Button>
				<Button variant="subtle" className="mt-4">
					Contact us
				</Button>
			</View>
			<Button size="md" className="w-[40%] justify-between bg-[#171717]" suffix={<CaretRight />}>
				Add new event
			</Button>
			<View className="flex-row gap-[90px]">
				<Button variant="outline" className="mt-4">
					Add subtask
				</Button>
				<Button variant="ghost" className="mb-4">
					Skip for now
				</Button>
			</View>
		</SafeAreaView>
	);
};
