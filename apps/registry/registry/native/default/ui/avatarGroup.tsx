// @ts-nocheck
import React from "react";
import { View, ViewProps } from "react-native";

import {
	createContext,
	cx,
	getValidChildren,
	isUndefined,
	styleAdapter,
} from "@/lib/utils";

import { Avatar, AvatarProps, AvatarSizes, avatarTheme } from "./avatar";

interface AvatarGroupWrapperProps extends ViewProps {
	size?: AvatarSizes;
	showRing?: boolean;
}

const AvatarGroupWrapper: React.FC<AvatarGroupWrapperProps> = ({
	children,
	style,
	...props
}) => {
	return (
		<View
			{...props}
			className={cx(avatarTheme.group.base, styleAdapter(style))}
		>
			{children}
		</View>
	);
};

const [AvatarGroupProvider, useAvatarGroup] =
	createContext<AvatarGroupSharedProps>({
		strict: false,
		name: "AvatarGroupProvider",
	});

export { useAvatarGroup };

export type AvatarGroupSharedProps = Pick<AvatarProps, "size" | "squared">;

export type AvatarGroupProps = ViewProps &
	AvatarGroupSharedProps & {
		/**
		 * Maximum number of avatars to be displayed within the group.
		 *
		 */
		max?: number;
		/**
		 * A ring around the Avatar Component. If true, the Avatar will show a border around it.
		 *
		 */
		showRing?: boolean;
		/**
		 * Color of the ring around the Avatar Component.
		 *
		 */
		ringColor?: string;
	};

export const AvatarGroup: React.FC<Partial<AvatarGroupProps>> = (props) => {
	const {
		squared = false,
		size = "xl",
		showRing = true,
		ringColor = "white",
		children,
		max,
		...rest
	} = props;
	const validChildren = getValidChildren(children);

	/**
	 * Get the avatars within the max
	 */
	const childrenWithinMax = isUndefined(max)
		? validChildren
		: validChildren.slice(0, max);

	const context = React.useMemo(() => ({ size, squared }), [size, squared]);

	const excess = isUndefined(max) ? 0 : validChildren.length - max;
	return (
		<AvatarGroupProvider value={context}>
			<AvatarGroupWrapper size={size} {...rest}>
				{childrenWithinMax.map((renderElement, index) => (
					<View
						className={cx(
							avatarTheme.borderRadius.size[size],
							index !== 0 ? avatarTheme.group.avatarWrapper.spacing[size] : "",
							squared ? "" : avatarTheme.group.avatarWrapper.circular,
							showRing ? avatarTheme.group.avatarWrapper.ringStyle : "",
						)}
						style={[
							showRing
								? { borderColor: ringColor, backgroundColor: ringColor }
								: {},
							{
								zIndex: childrenWithinMax.length - index,
							},
						]}
						key={index}
					>
						{renderElement}
					</View>
				))}
				{excess > 0 ? (
					<View
						className={cx(
							avatarTheme.borderRadius.size[size],
							avatarTheme.group.avatarWrapper.spacing[size],
							squared ? "" : avatarTheme.group.avatarWrapper.circular,
							showRing ? avatarTheme.group.avatarWrapper.ringStyle : "",
						)}
						style={[
							showRing
								? { borderColor: ringColor, backgroundColor: ringColor }
								: {},
						]}
					>
						<Avatar name={excess.toString()} />
					</View>
				) : null}
			</AvatarGroupWrapper>
		</AvatarGroupProvider>
	);
};
