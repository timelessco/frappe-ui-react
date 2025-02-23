/**
 * This hook is adapted from Chakra UI's useControllableState hook.
 * @see https://github.com/chakra-ui/chakra-ui/blob/main/packages/hooks/use-controllable-state/src/index.ts
 */

import { useMemo, useState, useCallback, useInsertionEffect, useRef } from 'react';

/**
 * This hook is user-land implementation of the experimental `useEffectEvent` hook.
 * React docs: https://react.dev/learn/separating-events-from-effects#declaring-an-effect-event
 */
export function useCallbackRef<Args extends unknown[], Return>(
	callback: ((...args: Args) => Return) | undefined,
	deps: React.DependencyList = []
) {
	const callbackRef = useRef<typeof callback>(() => {
		throw new Error('Cannot call an event handler while rendering.');
	});

	useInsertionEffect(() => {
		callbackRef.current = callback;
	});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useCallback((...args: Args) => callbackRef.current?.(...args), deps);
}

/**
 * Given a prop value and state value, the useControllableProp hook is used to determine whether a component is controlled or uncontrolled, and also returns the computed value.
 *
 * @see Docs https://chakra-ui.com/docs/hooks/use-controllable#usecontrollableprop
 */
export function useControllableProp<T>(prop: T | undefined, state: T) {
	const controlled = typeof prop !== 'undefined';
	const value = controlled ? prop : state;
	return useMemo<[boolean, T]>(() => [controlled, value], [controlled, value]);
}

export interface UseControllableStateProps<T> {
	value?: T;
	defaultValue?: T | (() => T);
	onChange?: (value: T) => void;
	shouldUpdate?: (prev: T, next: T) => boolean;
}

/**
 * The `useControllableState` hook returns the state and function that updates the state, just like React.useState does.
 *
 * @see Docs https://chakra-ui.com/docs/hooks/use-controllable#usecontrollablestate
 */
export function useControllableState<T>(props: UseControllableStateProps<T>) {
	const {
		value: valueProp,
		defaultValue,
		onChange,
		shouldUpdate = (prev, next) => prev !== next,
	} = props;

	const onChangeProp = useCallbackRef(onChange);
	const shouldUpdateProp = useCallbackRef(shouldUpdate);

	const [uncontrolledState, setUncontrolledState] = useState(defaultValue as T);
	const controlled = valueProp !== undefined;
	const value = controlled ? valueProp : uncontrolledState;

	const setValue = useCallbackRef(
		(next: React.SetStateAction<T>) => {
			const setter = next as (prevState?: T) => T;
			const nextValue = typeof next === 'function' ? setter(value) : next;

			if (!shouldUpdateProp(value, nextValue)) {
				return;
			}

			if (!controlled) {
				setUncontrolledState(nextValue);
			}

			onChangeProp(nextValue);
		},
		[controlled, onChangeProp, value, shouldUpdateProp]
	);

	return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}
