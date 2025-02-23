import React, { PropsWithChildren, useCallback } from 'react';
import { GestureResponderEvent, Pressable, PressableProps, Text } from 'react-native';
import Animated from 'react-native-reanimated';

import Icon from '@/components/ui/icon';
import { useHaptic } from '@/hooks/useHaptic';
import { useScaleAnimation } from '@/hooks/useScaleAnimation';
import { RenderPropType, passProps, cx } from '@/lib/utils';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'subtle';
type ButtonTheme = 'default';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
interface ButtonProps extends PressableProps {
	/**
	 * How large should the button be?
	 *
	 * @default md
	 */
	size: ButtonSize;
	/**
	 * How the button should look?
	 *
	 * @default solid
	 */
	variant: ButtonVariant;
	/**
	 * How the button should be themed?
	 *
	 * @default default
	 */
	themeColor: ButtonTheme;
	/**
	 * A Suffix Element.
	 * If added, the Button will show a suffix Element before the Button's text.
	 */
	suffix: RenderPropType;
	/**
	 * A Prefix Element.
	 * If added, the Button will show a prefix Element after the Button's text.
	 */
	prefix: RenderPropType;
	/**
	 * If added, the button will only show an icon ignoring other childrens.
	 */
	iconOnly: RenderPropType;
	/**
	 * If added, the button will show this spinner components
	 *
	 * @default "<Spinner />"
	 */
	spinner: RenderPropType;
	/**
	 * The Text style of the Tag component.
	 * @default {}
	 */
	textClassName: string;
	/**
	 * When a view is marked as accessible,
	 * it is a good practice to set an accessibilityLabel on the view,
	 * so that people who use VoiceOver know what element they have selected.
	 * VoiceOver will read this string when a user selects the associated element.
	 */
	accesibilityLabel: string;
	/**
	 * When set to true, The Tap creates a Touch Feedback
	 * Check more -> https://docs.expo.dev/versions/latest/sdk/haptics/
	 * @default true
	 */
	hapticEnabled: boolean;
	/**
	 * When set to true, The Button will scale down when pressed
	 * @default true
	 */
	scaleAnimationEnabled: boolean;
}

export const Button = (buttonProps: PropsWithChildren<Partial<ButtonProps>>) => {
	const {
		children,
		className,
		size = 'md',
		variant = 'solid',
		disabled,
		themeColor = 'default',
		textClassName = '',
		prefix,
		suffix,
		iconOnly,
		hapticEnabled = true,
		scaleAnimationEnabled = true,
		onPress,
		...otherButtonProps
	} = buttonProps;

	const haptic = useHaptic('selection');
	const { animatedStyle, handlers } = useScaleAnimation();

	/**
	 * Button Prefix Component
	 */
	const _prefix = prefix ? (
		<Icon
			size={buttonTheme.size[size].iconSize}
			icon={passProps(prefix, {
				className:
					buttonTheme.theme[themeColor].variant[variant].iconFill[
						disabled ? 'disabled' : 'default'
					],
			})}
		/>
	) : null;

	const _suffix = suffix ? (
		<Icon
			size={buttonTheme.size[size].iconSize}
			icon={passProps(suffix, {
				className:
					buttonTheme.theme[themeColor].variant[variant].iconFill[
						disabled ? 'disabled' : 'default'
					],
			})}
		/>
	) : null;

	const handlePress = useCallback(
		(e: GestureResponderEvent) => {
			if (hapticEnabled) haptic?.();
			onPress?.(e);
		},
		[hapticEnabled, haptic, onPress]
	);

	const _iconOnly = iconOnly ? (
		<Icon
			size={buttonTheme.size[size].iconSize}
			icon={passProps(iconOnly, {
				className:
					buttonTheme.theme[themeColor].variant[variant].iconFill[
						disabled ? 'disabled' : 'default'
					],
			})}
		/>
	) : null;

	return (
		<AnimatedPressable
			disabled={disabled}
			className={cx(
				buttonTheme.container,
				buttonTheme.size[size].default,
				buttonTheme.theme[themeColor].variant[variant].container[disabled ? 'disabled' : 'wrapper'],
				!iconOnly && buttonTheme.size[size].withoutIcon,
				className
			)}
			{...otherButtonProps}
			{...(scaleAnimationEnabled ? handlers : {})}
			onPress={handlePress}
			style={animatedStyle}>
			{_iconOnly ? (
				<>{_iconOnly}</>
			) : (
				<>
					{_prefix}
					<Text
						className={cx(
							buttonTheme.size[size].text,
							buttonTheme.theme[themeColor].variant[variant].text[
								disabled ? 'disabled' : 'default'
							],
							textClassName
						)}>
						{children}
					</Text>
					{_suffix}
				</>
			)}
		</AnimatedPressable>
	);
};

export const buttonTheme = {
	container: 'relative flex flex-row items-center justify-center gap-2',

	theme: {
		default: {
			variant: {
				solid: {
					container: {
						wrapper: 'bg-surface-gray-7 active:bg-surface-gray-6',
						disabled: 'bg-surface-gray-2',
					},
					iconFill: {
						default: 'fill-ink-white',
						disabled: 'fill-ink-gray-4',
					},
					text: {
						default: 'text-ink-white',
						disabled: 'text-ink-gray-4',
					},
				},
				subtle: {
					container: {
						wrapper: 'bg-surface-gray-2 active:bg-surface-gray-3',
						disabled: 'bg-surface-gray-2',
					},
					iconFill: {
						default: 'fill-ink-gray-7',
						disabled: 'fill-ink-gray-4',
					},
					text: {
						default: 'text-ink-gray-7',
						disabled: 'text-ink-gray-4',
					},
				},
				outline: {
					container: {
						wrapper: 'border border-outline-gray-2 active:border-outline-gray-3',
						disabled: 'border bg-surface-gray-2 border-outline-gray-2',
					},
					iconFill: {
						default: 'fill-ink-gray-7',
						disabled: 'fill-ink-gray-4',
					},
					text: {
						default: 'text-ink-gray-7',
						disabled: 'text-ink-gray-4',
					},
				},
				ghost: {
					container: {
						wrapper: 'bg-transparent active:bg-surface-gray-3',
						disabled: 'bg-transparent',
					},
					iconFill: {
						default: 'fill-ink-gray-7',
						disabled: 'fill-ink-gray-4',
					},
					text: {
						default: 'text-ink-gray-7',
						disabled: 'text-ink-gray-4',
					},
				},
			},
		},
	},
	size: {
		sm: {
			default: 'min-h-7 min-w-7 rounded-ef-4',
			iconSize: 16,
			withoutIcon: 'px-2',
			text: 'text-sm font-regular',
		},
		md: {
			default: 'min-h-8 min-w-8 rounded-ef-4',
			iconSize: 18,
			withoutIcon: 'px-2.5',
			text: 'text-sm font-medium',
		},
		lg: {
			default: 'min-h-10 min-w-10 rounded-ef-5',
			iconSize: 20,
			withoutIcon: 'px-3',
			text: 'text-base font-medium',
		},
		xl: {
			default: 'min-h-[46px] min-w-[46px] rounded-ef-6',
			iconSize: 24,
			withoutIcon: 'px-3.5',
			text: 'text-[18px] font-medium',
		},
		'2xl': {
			default: 'min-h-[52px] min-w-[52px] rounded-ef-7',
			iconSize: 24,
			withoutIcon: 'px-4',
			text: 'text-xl font-medium',
		},
	},
};
