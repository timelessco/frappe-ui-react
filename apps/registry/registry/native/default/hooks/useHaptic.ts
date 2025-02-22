// @ts-nocheck
import { useCallback, useMemo } from "react";
import * as Haptics from "expo-haptics";
import { Platform } from "react-native";

type FeedbackType = "light" | "medium" | "heavy" | "selection";

export const useHaptic = (feedbackType: FeedbackType = "selection") => {
	const createHapticHandler = useCallback(
		(type: Haptics.ImpactFeedbackStyle) => {
			return Platform.OS === "web"
				? undefined
				: () => Haptics.impactAsync(type);
		},
		[],
	);

	const hapticHandlers = useMemo(
		() => ({
			light: createHapticHandler(Haptics.ImpactFeedbackStyle.Light),
			medium: createHapticHandler(Haptics.ImpactFeedbackStyle.Medium),
			heavy: createHapticHandler(Haptics.ImpactFeedbackStyle.Heavy),
			selection: Platform.OS === "web" ? undefined : Haptics.selectionAsync,
		}),
		[createHapticHandler],
	);

	return hapticHandlers[feedbackType];
};
