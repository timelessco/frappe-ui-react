// @ts-nocheck
import React, { forwardRef } from "react";
import { View, ViewStyle } from "react-native";

import { cx } from "@/lib/utils";

export interface IconComponentProps {
	/**
	 * Svg Icon
	 */
	icon: React.ReactNode;
	/**
	 * Bounding Box style for Icon
	 */
	style?: ViewStyle;
	/**
	 * Icon Size
	 */
	size?: 10 | 12 | 16 | 20 | 24 | 32 | number;
	/**
	 * Icon Color
	 * @default gray-600
	 */
	color?: string;
	/**
	 * Icon Class Name
	 */
	className?: string;
}

const Icon: React.FC<Partial<IconComponentProps>> = forwardRef<
	typeof View,
	Partial<IconComponentProps>
>((props, ref) => {
	const { icon, style, className, size, color } = props;

	return (
		<View
			ref={ref as React.RefObject<View>}
			className={cx("aspect-[1]", className)}
			style={[style, { width: size }]}
		>
			{/* @ts-ignore */}
			{React.isValidElement(icon) && React.cloneElement(icon, { fill: color })}
		</View>
	);
});

Icon.displayName = "Icon";

export default Icon;
