// @ts-nocheck
import React, { forwardRef, useState } from "react";
import { cssInterop } from "nativewind";
import {
	Image,
	ImageProps,
	ImageSourcePropType,
	Text,
	View,
	ViewProps,
} from "react-native";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

import {
	cx,
	IconProps,
	isUndefined,
	passProps,
	styleAdapter,
} from "@/lib/utils";

import { useAvatarGroup } from "./avatarGroup";
import Icon from "./icon";

function getInitials(name: string, size: AvatarSizes) {
	if (!name) {
		return;
	}
	const [firstName, lastName] = name.split(" ");
	const oneLetterInitialSizes = ["xs", "sm", "md"];

	const initials =
		firstName && lastName
			? `${firstName.charAt(0)}${lastName.charAt(0)}`
			: `${firstName.charAt(0)}${firstName.charAt(1)}`;

	return oneLetterInitialSizes.includes(size)
		? initials.toUpperCase().charAt(0)
		: initials.toUpperCase();
}

export const DefaultUser: React.FC<IconProps> = ({
	fill = "#525252",
	className = "",
}) => {
	return (
		<Svg
			width="100%"
			height="100%"
			viewBox="0 0 12 12"
			fill="none"
			className={className}
		>
			<G clipPath="url(#clip0_205_794)">
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M4.6524 3.00156C4.6524 2.25598 5.25681 1.65156 6.0024 1.65156C6.74798 1.65156 7.3524 2.25598 7.3524 3.00156C7.3524 3.74715 6.74798 4.35156 6.0024 4.35156C5.25681 4.35156 4.6524 3.74715 4.6524 3.00156ZM6.0024 0.351562C4.53884 0.351562 3.3524 1.53801 3.3524 3.00156C3.3524 4.46512 4.53884 5.65156 6.0024 5.65156C7.46595 5.65156 8.6524 4.46512 8.6524 3.00156C8.6524 1.53801 7.46595 0.351562 6.0024 0.351562ZM6.0024 6.35156C5.27824 6.35156 4.55891 6.46557 3.88452 6.68904C3.21024 6.91248 2.58965 7.2425 2.06081 7.66557C1.69994 7.95427 1.38818 8.28113 1.13318 8.63789C0.598059 9.38654 0.706753 10.2144 1.15229 10.8221C1.57414 11.3975 2.28927 11.7835 3.05384 11.8599C5.01466 12.056 6.99014 12.056 8.95096 11.8599C9.71553 11.7835 10.4307 11.3975 10.8525 10.8221C11.298 10.2144 11.4067 9.38654 10.8716 8.63789C10.6166 8.28113 10.3049 7.95427 9.94398 7.66557C8.87889 6.81349 7.45971 6.35156 6.0024 6.35156ZM4.29344 7.92305C4.83231 7.74449 5.41334 7.65156 6.0024 7.65156C7.19725 7.65156 8.32161 8.03249 9.13188 8.6807C9.40427 8.89861 9.63208 9.13932 9.81401 9.39384C9.98093 9.62737 9.96201 9.83807 9.80409 10.0535C9.62248 10.3012 9.25833 10.5227 8.8216 10.5664C6.94681 10.7539 5.05799 10.7539 3.18319 10.5664C2.74647 10.5227 2.38231 10.3012 2.2007 10.0535C2.04279 9.83807 2.02387 9.62737 2.19079 9.39384C2.37272 9.13932 2.60052 8.89861 2.87292 8.6807C3.27267 8.3609 3.75447 8.10165 4.29344 7.92305Z"
					fill={fill}
				/>
			</G>
			<Defs>
				<ClipPath id="clip0_205_794">
					<Rect width="12" height="12" fill="white" />
				</ClipPath>
			</Defs>
		</Svg>
	);
};

cssInterop(DefaultUser, {
	className: {
		target: true,
		nativeStyleToProp: { fill: true },
	},
});

export type AvatarSizes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type AvatarStatusType = "active" | "away" | "sleep" | "pin" | "pinned";

export interface AvatarProps extends ViewProps {
	/**
	 * React Native Image component Props, except for source
	 */
	imageProps: Omit<ImageProps, "source">;
	/**
	 * The image source (either a remote URL or a local file resource).
	 * Check https://reactnative.dev/docs/image#imagesource
	 */
	src: ImageSourcePropType;
	/**
	 * How large should avatar be?
	 *
	 * @default xl
	 */
	size: AvatarSizes;
	/**
	 * If `true`, Avatar looks like a squared.
	 *
	 * @default false
	 */
	squared: boolean;
	/**
	 * Name prop used for `alt` & calculate placeholder initials.
	 */
	name: string;
	/**
	 * Shows AvatarBadge with the given type
	 *
	 * @default none
	 */
	status: AvatarStatusType;
	/**
	 * StatusIndicator's Background Color & StatusIndicator Ring Color.
	 *
	 * @default "text-white-900"
	 */
	parentsBackground: string;
}
interface AvatarImageProps
	extends Pick<AvatarProps, "imageProps" | "src" | "squared" | "size"> {
	handleFallback: () => void;
}

export const avatarTheme = {
	base: "relative items-center justify-center bg-surface-gray-2",
	size: {
		xs: "h-4 w-4",
		sm: "h-5 w-5",
		md: "h-6 w-6",
		lg: "h-7 w-7",
		xl: "h-8 w-8",
		"2xl": "h-10 w-10",
		"3xl": "h-[46px] w-[46px]",
	},
	image: "w-full h-full",
	// Having style objects because specific value not present as tailwind classnames
	borderRadius: {
		size: {
			xs: "rounded",
			sm: "rounded-[5px]",
			md: "rounded-[5px]",
			lg: "rounded-md",
			xl: "rounded-md",
			"2xl": "rounded-lg",
			"3xl": "rounded-[10px]",
		},
	},
	circular: "rounded-[9999]",
	// SVG Icon Scaling with respect to Container Width
	defaultUserIcon: {
		xs: 10,
		sm: 12,
		md: 14,
		lg: 16,
		xl: 16,
		"2xl": 20,
		"3xl": 20,
	},
	initials: {
		base: "text-center uppercase font-medium text-ink-gray-7",
		size: {
			xs: "text-xs",
			sm: "text-cxs",
			md: "text-sm",
			lg: "text-sm",
			xl: "text-base",
			"2xl": "text-lg",
			"3xl": "text-xl",
		},
	},
	status: {
		position: { bottom: -2.5, right: -2.5 },
		active: {
			container:
				"absolute border-[1.5px] border-white-900 bg-white-900 rounded-full bottom-0 right-0",
			base: "bg-ink-green-4 rounded-full",
			size: {
				xs: "h-1 w-1",
				sm: "h-[5px] w-[5px]",
				md: "h-1.5 w-1.5",
				lg: "h-[7px] w-[7px]",
				xl: "h-2 w-2",
				"2xl": "h-2.5 w-2.5",
				"3xl": "h-[11px] w-[11px]",
			},
		},
		away: {
			container:
				"absolute border-[1.5px] border-white-900 bg-white-900 rounded-full bottom-0 right-0",
			base: "bg-white-900 rounded-full",
			size: {
				xs: "h-1 w-1",
				sm: "h-[5px] w-[5px]",
				md: "h-1.5 w-1.5",
				lg: "h-[7px] w-[7px]",
				xl: "h-2 w-2",
				"2xl": "h-2.5 w-2.5",
				"3xl": "h-[11px] w-[11px]",
			},
		},
		sleep: {
			container:
				"absolute border-[1.5px] border-white-900 bg-white-900 rounded-full bottom-0 right-0",
			base: "bg-white-900 rounded-full",
			size: {
				xs: "h-1 w-1",
				sm: "h-[5px] w-[5px]",
				md: "h-1.5 w-1.5",
				lg: "h-[7px] w-[7px]",
				xl: "h-2 w-2",
				"2xl": "h-2.5 w-2.5",
				"3xl": "h-[11px] w-[11px]",
			},
		},
		pin: {
			container:
				"absolute border-[1.5px] border-white-900 bg-white-900 rounded-full bottom-0 right-0",
			base: "bg-white-900 rounded-full",
			size: {
				xs: "h-1 w-1",
				sm: "h-[5px] w-[5px]",
				md: "h-1.5 w-1.5",
				lg: "h-[7px] w-[7px]",
				xl: "h-2 w-2",
				"2xl": "h-2.5 w-2.5",
				"3xl": "h-[11px] w-[11px]",
			},
		},
		pinned: {
			container:
				"absolute border-[1.5px] border-white-900 bg-white-900 rounded-full bottom-0 right-0",
			base: "bg-white-900 rounded-full",
			size: {
				xs: "h-1 w-1",
				sm: "h-[5px] w-[5px]",
				md: "h-1.5 w-1.5",
				lg: "h-[7px] w-[7px]",
				xl: "h-2 w-2",
				"2xl": "h-2.5 w-2.5",
				"3xl": "h-[11px] w-[11px]",
			},
		},
	},
	group: {
		base: "relative flex-row items-center",
		avatarWrapper: {
			ringStyle: "border-[1.5px]",
			circular: "rounded-[9999]",
			// Adding +4 to the negative margin including the borderWidth(2) value
			spacing: {
				xs: "-ml-1.5",
				sm: "-ml-2",
				md: "-ml-2",
				lg: "-ml-2",
				xl: "-ml-2",
				"2xl": "-ml-2.5",
				"3xl": "-ml-3",
			},
		},
	},
};

export const AvatarImage: React.FC<AvatarImageProps> = ({
	imageProps,
	src,
	squared,
	size,
	handleFallback,
}) => {
	return (
		<Image
			source={src}
			className={cx(
				avatarTheme.image,
				!squared ? avatarTheme.circular : avatarTheme.borderRadius.size[size],
			)}
			onError={handleFallback}
			{...imageProps}
		/>
	);
};

export const Avatar: React.FC<Partial<AvatarProps>> = forwardRef<
	View,
	Partial<AvatarProps>
>((props, ref) => {
	const avatarGroupProps = useAvatarGroup();

	const {
		size = avatarGroupProps?.size || "xl",
		squared = false,
		name,
		style,
		src,
		status,
		parentsBackground = "white",
		imageProps = {},
		...otherProps
	} = props;

	const isSquared = isUndefined(avatarGroupProps)
		? squared
		: avatarGroupProps.squared;

	const isSourceAvailable = React.useMemo(() => !!src, [src]);
	const [imageAvailable, setImageAvailable] = useState(isSourceAvailable);
	const loadFallback = () => setImageAvailable(false);

	const avatarSize = (
		isUndefined(avatarGroupProps) ? size : avatarGroupProps.size
	) as AvatarSizes;

	return (
		<View
			className={cx(
				avatarTheme.base,
				avatarTheme.size[avatarSize],
				avatarTheme.borderRadius.size[avatarSize],
				isSquared ? "" : avatarTheme.circular,
			)}
			style={styleAdapter(style)}
			ref={ref}
			{...otherProps}
		>
			{imageAvailable && src ? (
				<AvatarImage
					size={size}
					imageProps={imageProps}
					src={src}
					squared={isSquared}
					handleFallback={loadFallback}
				/>
			) : name ? (
				<Text
					className={cx(
						avatarTheme.initials.base,
						avatarTheme.initials.size[avatarSize],
					)}
					adjustsFontSizeToFit
					allowFontScaling={false}
				>
					{getInitials(name, avatarSize)}
				</Text>
			) : (
				<Icon
					icon={passProps(DefaultUser, {
						className: "text-ink-gray-6",
					})}
					size={avatarTheme.defaultUserIcon[avatarSize]}
				/>
			)}
			{status && (
				<AvatarStatus
					parentsBackground={parentsBackground}
					size={size}
					status={status}
				/>
			)}
		</View>
	);
});

export const AvatarStatus: React.FC<
	Pick<AvatarProps, "status" | "size" | "parentsBackground">
> = ({ status, size, parentsBackground }) => {
	switch (status) {
		case "active": {
			return (
				<View
					className={cx(
						avatarTheme.status.active.container,
						avatarTheme.status.position,
					)}
					style={{ borderColor: parentsBackground }}
				>
					<View
						className={cx(
							avatarTheme.status.active.base,
							avatarTheme.status.active.size[size],
						)}
					/>
				</View>
			);
		}
		case "away": {
			return (
				<View
					className={cx(
						avatarTheme.status.away.container,
						avatarTheme.status.position,
					)}
					style={{
						borderColor: parentsBackground,
						backgroundColor: parentsBackground,
					}}
				>
					<View className={cx(avatarTheme.status.away.size[size])}>
						<Svg width="100%" height="100%" viewBox="0 0 4 4" fill="none">
							<Path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4ZM2 3.25C2.69036 3.25 3.25 2.69036 3.25 2C3.25 1.30964 2.69036 0.75 2 0.75C1.30964 0.75 0.75 1.30964 0.75 2C0.75 2.69036 1.30964 3.25 2 3.25Z"
								fill="#7C7C7C"
							/>
						</Svg>
					</View>
				</View>
			);
		}
		case "sleep": {
			return (
				<View
					className={cx(
						avatarTheme.status.sleep.container,
						avatarTheme.status.position,
					)}
					style={[
						{
							borderColor: parentsBackground,
							backgroundColor: parentsBackground,
						},
					]}
				>
					<View className={cx(avatarTheme.status.sleep.size[size])}>
						<Svg width="100%" height="100%" viewBox="0 0 17 16" fill="none">
							<Path
								d="M16.4819 8.71993C16.4899 8.63114 16.3851 8.57883 16.3161 8.63536C15.2802 9.48479 13.9551 9.99457 12.5109 9.99457C9.19415 9.99457 6.50543 7.30585 6.50543 3.98914C6.50543 2.54495 7.01521 1.21982 7.86464 0.183882C7.92117 0.114945 7.86886 0.0101007 7.78008 0.0180934C3.69856 0.385505 0.5 3.8156 0.5 7.99276C0.5 12.415 4.08496 16 8.50724 16C12.6844 16 16.1145 12.8014 16.4819 8.71993Z"
								fill="#7C7C7C"
							/>
						</Svg>
					</View>
				</View>
			);
		}
		case "pin": {
			return (
				<View
					className={cx(
						avatarTheme.status.pin.container,
						avatarTheme.status.position,
					)}
					style={[
						{
							borderColor: parentsBackground,
							backgroundColor: parentsBackground,
						},
					]}
				>
					<View className={cx(avatarTheme.status.sleep.size[size])}>
						<Svg width="100%" height="100%" viewBox="0 0 17 16" fill="none">
							<Path
								d="M15.6265 5.75851L10.7414 0.873414C10.2097 0.341675 9.94381 0.0758058 9.66329 0.0189383C9.41797 -0.0307914 9.16294 0.0183228 8.95364 0.155604C5.68535 2.29929 7.19133 4.8215 2.15218 5.82933C0.322067 6.19535 -0.062262 6.95627 1.37562 8.39415L3.8794 10.898L1.66331 13.114C1.27278 13.5046 1.27278 14.1377 1.66331 14.5283L2.04011 14.9051C2.43064 15.2956 3.06379 15.2956 3.45432 14.9051L5.67043 12.689L8.10585 15.1244C9.54373 16.5623 10.3047 16.1779 10.6707 14.3478C11.6785 9.30867 14.2007 10.8146 16.3443 7.54629C16.4816 7.33699 16.5307 7.08196 16.481 6.83665C16.4241 6.55612 16.1583 6.29025 15.6265 5.75851Z"
								fill="#7C7C7C"
							/>
						</Svg>
					</View>
				</View>
			);
		}
		case "pinned": {
			return (
				<View
					className={cx(avatarTheme.status.pinned.container)}
					style={[
						{
							borderColor: parentsBackground,
							backgroundColor: parentsBackground,
						},
					]}
				>
					<View className={cx(avatarTheme.status.pinned.size[size])}>
						<Svg width="100%" height="100%" viewBox="0 0 19 18" fill="none">
							<Path
								d="M0.5 9C0.5 4.02944 4.52944 0 9.5 0V0C14.4706 0 18.5 4.02944 18.5 9V9C18.5 13.9706 14.4706 18 9.5 18V18C4.52944 18 0.5 13.9706 0.5 9V9Z"
								fill="#3BBDE5"
							/>
							<Path
								d="M14.6222 7.38893L11.111 3.87777C10.7288 3.49558 10.5377 3.30449 10.3361 3.26361C10.1598 3.22787 9.97649 3.26317 9.82606 3.36184C7.47697 4.90261 8.55939 6.71545 4.9375 7.43983C3.62211 7.70291 3.34587 8.24982 4.37935 9.28329L6.17894 11.0829L4.72155 12.5403C4.36607 12.8958 4.36606 13.4721 4.72154 13.8276C5.07702 14.1831 5.65335 14.1831 6.00883 13.8276L7.46625 12.3702L9.2167 14.1207C10.2502 15.1541 10.7971 14.8779 11.0602 13.5625C11.7845 9.94061 13.5973 11.023 15.1381 8.6739C15.2368 8.52346 15.2721 8.34016 15.2363 8.16384C15.1955 7.96221 15.0044 7.77112 14.6222 7.38893Z"
								fill="white"
							/>
						</Svg>
					</View>
				</View>
			);
		}
	}
};
