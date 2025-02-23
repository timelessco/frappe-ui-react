import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Add } from './svg/Add';
import { Clock } from './svg/Clock';
import { Link } from './svg/Link';
import { Location } from './svg/Location';

import { Tag } from '@/components/ui/tag';

export const TagUI = () => {
	return (
		<SafeAreaView className="flex-1 gap-4 justify-center items-center bg-ink-white">
			<View className="flex-row gap-[30px]">
				<Tag size="sm" variant="solid" className="mb-4" prefix={<Link />}>
					timeless.co
				</Tag>
				<Tag size="md" variant="outline" suffix={<Add />} className="mt-4">
					Javascript
				</Tag>
			</View>
			<Tag size="lg" className="bg-[#171717]" prefix={<Location />}>
				Chennai, India
			</Tag>
			<View className="flex-row gap-[90px]">
				<Tag size="lg" variant="outline" closable className="mb-4">
					React Native
				</Tag>

				<Tag variant="subtle" prefix={<Clock />} className="mt-4">
					Scheduled
				</Tag>
			</View>
		</SafeAreaView>
	);
};
