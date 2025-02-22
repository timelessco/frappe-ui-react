// @ts-nocheck
import React, { PropsWithChildren, useCallback } from "react";
import {
	GestureResponderEvent,
	Pressable,
	PressableProps,
	Text,
	TextStyle,
} from "react-native";
import { cssInterop } from "react-native-css-interop";
import Animated from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

import { useHaptic } from "@/hooks/useHaptic";
import { useScaleAnimation } from "@/hooks/useScaleAnimation";
import Icon from "@/components/ui/icon";
import { cx, IconProps, passProps, RenderPropType } from "@/lib/utils";

export type TagSize = "sm" | "md" | "lg";
export type TagVariant = "solid" | "subtle" | "outline" | "ghost";
export type TagTheme = "default";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Close: React.FC<IconProps> = ({ fill = "#525252" }) => {
	return (
		<Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.1654 3.54105C9.36066 3.34579 9.36066 3.02921 9.1654 2.83395C8.97014 2.63868 8.65356 2.63868 8.45829 2.83395L5.99988 5.29236L3.54147 2.83395C3.34621 2.63868 3.02962 2.63868 2.83436 2.83395C2.6391 3.02921 2.6391 3.34579 2.83436 3.54105L5.29278 5.99947L2.83395 8.45829C2.63868 8.65356 2.63868 8.97014 2.83395 9.1654C3.02921 9.36066 3.34579 9.36066 3.54105 9.1654L5.99988 6.70657L8.45871 9.1654C8.65397 9.36066 8.97055 9.36066 9.16582 9.1654C9.36108 8.97014 9.36108 8.65356 9.16582 8.45829L6.70699 5.99947L9.1654 3.54105Z"
				fill={fill}
			/>
		</Svg>
	);
};

cssInterop(Close, {
	className: {
		target: true,
		nativeStyleToProp: { fill: true },
	},
});

export interface TagProps extends PressableProps {
	/**
	 * The size of the Tag component.
	 * @default md
	 */
	size: TagSize;
	/**
	 * The variant of the Tag component.
	 * @default solid
	 */
	variant: TagVariant;
	/**
	 * The Theme of the Tag component.
	 * @default base
	 */
	themeColor: TagTheme;
	/**
	 * A Prefix Element.
	 * If added, the Tag will show a prefix Element before the Tag's text.
	 */
	prefix: RenderPropType;
	/**
	 * A Suffix Element.
	 * If added, the Tag will show a suffix Element after the Tag's text.
	 */
	suffix: RenderPropType;
	/**
	 * Is Tag Closable/Removable.
	 * If yes, the Tag will show a Close Icon after the Tag's text or Suffix.
	 */
	closable: boolean;
	/**
	 * The Text style of the Tag component.
	 * @default {}
	 */
	textStyle: TextStyle;
	/**
	 * When a view is marked as accessible,
	 * it is a good practice to set an accessibilityLabel on the view,
	 * so that people who use VoiceOver know what element they have selected.
	 * VoiceOver will read this string when a user selects the associated element.
	 */
	accessibilityLabel: string;
	/**
	 * When set to true, The Tap creates a Touch Feedback
	 * Check more -> https://docs.expo.dev/versions/latest/sdk/haptics/
	 * @default true
	 */
	hapticEnabled: boolean;
	/**
	 * The className of the Tag component.
	 */
	className: string;
}

export const Tag = (tagProps: PropsWithChildren<Partial<TagProps>>) => {
	const { handlers, animatedStyle } = useScaleAnimation();
	const hapticSelection = useHaptic();

	const {
		size = "md",
		variant = "solid",
		themeColor = "default",
		closable = false,
		prefix,
		suffix: suffixFromProps,
		style,
		textStyle,
		accessibilityLabel,
		hapticEnabled = true,
		onPress,
		children,
		disabled,
		className,
		...otherProps
	} = tagProps;

	const handlePress = useCallback((event: GestureResponderEvent) => {
		onPress && onPress(event);
		hapticEnabled && hapticSelection?.();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	/* Prefix Slot */
	const _prefix = prefix ? (
		<Icon
			size={tagTheme.size[size].iconSize}
			icon={passProps(prefix, {
				className:
					tagTheme.theme[themeColor]?.variant[variant]?.iconFill?.[
						disabled ? "disabled" : "default"
					],
			})}
		/>
	) : null;

	const suffix = suffixFromProps ? (
		suffixFromProps
	) : closable ? (
		<Icon
			size={tagTheme.size[size].iconSize}
			icon={
				<Close
					className={
						tagTheme.theme[themeColor]?.variant[variant]?.iconFill?.[
							disabled ? "disabled" : "default"
						]
					}
				/>
			}
		/>
	) : null;
	/* Suffix Slot */
	const _suffix = suffix ? (
		<Icon
			size={tagTheme.size[size].iconSize}
			icon={passProps(suffix, {
				className:
					tagTheme.theme[themeColor]?.variant[variant]?.iconFill?.[
						disabled ? "disabled" : "default"
					],
			})}
		/>
	) : null;

	/**
	 * Tag Children
	 */
	const tagChildren =
		typeof children === "string" ? (
			<Text
				className={cx(
					tagTheme.size[size]?.text,
					tagTheme.theme[themeColor]?.variant[variant]?.text?.default,
					disabled
						? tagTheme.theme[themeColor]?.variant[variant]?.text?.disabled
						: "",
				)}
				adjustsFontSizeToFit
				allowFontScaling={false}
			>
				{children as React.ReactNode}
			</Text>
		) : (
			children
		);

	return (
		<AnimatedPressable
			disabled={disabled}
			className={cx(
				tagTheme.base,
				tagTheme.size[size].default,
				tagTheme.theme[themeColor]?.variant[variant]?.container?.wrapper,
				disabled
					? tagTheme.theme[themeColor]?.variant[variant]?.container?.disabled
					: "",
				className,
			)}
			{...otherProps}
			accessible
			accessibilityRole="button"
			accessibilityLabel={accessibilityLabel}
			{...handlers}
			onPress={handlePress}
			style={animatedStyle}
		>
			<>
				{_prefix}
				{tagChildren}
				{_suffix}
			</>
		</AnimatedPressable>
	);
};

export const tagTheme = {
	base: "flex flex-row items-center justify-center gap-2",
	theme: {
		default: {
			variant: {
				solid: {
					container: {
						wrapper: "bg-surface-gray-7 active:bg-surface-gray-6",
						disabled: "bg-surface-gray-2",
					},
					iconFill: {
						default: "fill-ink-white",
						disabled: "fill-ink-gray-4",
					},
					text: {
						default: "text-ink-white",
						disabled: "text-ink-gray-4",
					},
				},
				subtle: {
					container: {
						wrapper: "bg-surface-gray-2 active:bg-surface-gray-3",
						disabled: "bg-surface-gray-2",
					},
					iconFill: {
						default: "fill-ink-gray-7",
						disabled: "fill-ink-gray-4",
					},
					text: {
						default: "text-ink-gray-7",
						disabled: "text-ink-gray-4",
					},
				},
				outline: {
					container: {
						wrapper:
							"border border-outline-gray-2 active:border-outline-gray-3",
						disabled: "border bg-surface-gray-2 border-outline-gray-2",
					},
					iconFill: {
						default: "fill-ink-gray-7",
						disabled: "fill-ink-gray-4",
					},
					text: {
						default: "text-ink-gray-7",
						disabled: "text-ink-gray-4",
					},
				},
				ghost: {
					container: {
						wrapper: "bg-transparent active:bg-surface-gray-3",
						disabled: "bg-transparent",
					},
					iconFill: {
						default: "fill-ink-gray-7",
						disabled: "fill-ink-gray-4",
					},
					text: {
						default: "text-ink-gray-7",
						disabled: "text-ink-gray-4",
					},
				},
			},
		},
	},
	size: {
		sm: {
			default: "min-h-5 w-auto min-w-5 px-1.5 rounded-[5px]",
			iconSize: 12,
			closable: "w-3 ml-1",
			text: "text-[12px] font-medium",
		},
		md: {
			default: "min-h-6 w-auto min-w-6 px-1.5 rounded-md",
			iconSize: 12,
			closable: "w-3 ml-1",
			text: "text-[13px] font-medium",
		},
		lg: {
			default: "min-h-7 w-auto min-w-7 px-2 rounded-lg",
			iconSize: 12,
			closable: "w-3 ml-1",
			text: "text-sm font-medium",
		},
	},
};

export default Tag;
