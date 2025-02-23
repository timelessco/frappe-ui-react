import React from 'react';
import {
	Falsy,
	PressableStateCallbackType,
	RegisteredStyle,
	StyleProp,
	StyleSheet,
	ViewStyle,
} from 'react-native';

/**
 * The `cx` function in TypeScript filters out falsy values from an array of classNames and joins the
 * remaining values with a space.
 * @param {unknown[]} classNames - The `classNames` parameter is a rest parameter in TypeScript that
 * allows the `cx` function to accept an arbitrary number of arguments of type `unknown`. These
 * arguments represent CSS class names that will be filtered to remove any falsy values (such as
 * `null`, `undefined`, `false`, etc.)
 */
export const cx = (...classNames: unknown[]): string => classNames.filter(Boolean).join(' ');

/**
 * "If the type of the value is a function, then return true, otherwise return false."
 *
 * The above function is a type guard. It's a function that takes a value and returns a boolean. If the
 * boolean is true, then the value is of the type that the type guard is guarding against
 * @param {any} value - any - The value to check.
 */
const isFunction = (value: any): value is Function => typeof value === 'function';

/**
 * Take from Chakra UI Util Funcs
 * https://github.com/chakra-ui/chakra-ui/blob/05b19899b02e17b4ee16045c9e5065fa835f0159/packages/components/theme/src/utils/run-if-fn.ts
 *
 * "If the valueOrFn is a function, call it with the args and return the result, otherwise return the
 * valueOrFn."
 *
 * The function is generic, so it can be used with any type of valueOrFn and any number of args
 * @param {T | ((...fnArgs: U[]) => T)} valueOrFn - T | ((...fnArgs: U[]) => T)
 * @param {U[]} args - U[]
 * @returns A function that takes a value or a function and returns the value or the result of the
 * function.
 */
function runIfFn<T, U>(valueOrFn: T | ((...fnArgs: U[]) => T), ...args: U[]): T {
	return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

export const styleAdapter = (
	style: StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>),
	touchState?: PressableStateCallbackType
): ViewStyle | Falsy | RegisteredStyle<ViewStyle> => {
	const _style = touchState ? runIfFn(style, touchState) : style;
	const __style = !Array.isArray(_style) ? _style : StyleSheet.flatten(_style);
	return __style as ViewStyle | Falsy | RegisteredStyle<ViewStyle>;
};

/**
 *
 * Types
 *
 */
export type Dict<T = unknown> = Record<string, T>;

export type DeepDictionary<K> = {
	[P in keyof K]: K[P] extends Dict ? DeepDictionary<K[P]> & { [x: string]: unknown } : K[P];
};

export type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P]>;
};

export type RenderPropType<T = unknown> =
	| React.ReactNode
	| ((args: T) => JSX.Element | React.ReactNode);

export type AnyObject = Record<keyof any, any>;

export type RenderProp<P = AnyObject> = (props: P) => React.ReactNode;

// Merge library & user prop
export function passProps<T extends AnyObject = AnyObject, S = AnyObject>(
	component: RenderPropType<S>,
	props?: T
): React.ReactNode {
	return React.isValidElement(component)
		? React.cloneElement(component, {
				...props,
				...component.props,
			})
		: // @ts-ignore
			runIfFn(component, { ...props });
}

export type IconProps = { fill?: string; className?: string };

export function isUndefined(value: unknown): value is undefined {
	return typeof value === 'undefined' || value === undefined;
}

export interface CreateContextOptions {
	/**
	 * If `true`, React will throw if context is `null` or `undefined`
	 * In some cases, you might want to support nested context, so you can set it to `false`
	 */
	strict?: boolean;
	/**
	 * Error message to throw if the context is `undefined`
	 */
	errorMessage?: string;
	/**
	 * The display name of the context
	 */
	name?: string;
}

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export function createContext<ContextType>(
	options: CreateContextOptions = {}
): CreateContextReturn<ContextType> {
	const {
		strict = true,
		errorMessage = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
		name,
	} = options;

	const Context = React.createContext<ContextType | undefined>(undefined);

	Context.displayName = name;

	function useContext() {
		const context = React.useContext(Context);

		if (!context && strict) {
			throw new Error(errorMessage);
		}

		return context;
	}

	return [Context.Provider, useContext, Context] as CreateContextReturn<ContextType>;
}

export const getValidChildren = (children: React.ReactNode): React.ReactElement[] => {
	return React.Children.toArray(children).filter((child) =>
		React.isValidElement(child)
	) as React.ReactElement[];
};
