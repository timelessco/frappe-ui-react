import { ViewStyle } from 'react-native';

import { passProps } from './react';
import { RenderPropType } from './types';

interface CreateIconOptions {
	icon: RenderPropType;
	iconFill?: string;
	iconStyle?: ViewStyle;
	iconClassName?: string;
	iconSize?: number;
}

export const createIcon = (options: CreateIconOptions) => {
	const { icon, iconFill, iconStyle, iconClassName, iconSize } = options;
	return passProps(icon, {
		color: iconFill,
		style: iconStyle,
		className: iconClassName,
		size: iconSize,
	});
};
