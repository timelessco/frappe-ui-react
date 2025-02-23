import React from 'react';

import { RenderPropType, AnyObject } from './types';

function isFunction(value: unknown): value is Function {
	return typeof value === 'function';
}

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

export function runIfFn<T extends AnyObject = AnyObject>(
	component: RenderPropType<T>,
	props: T
): React.ReactNode {
	return isFunction(component) ? component({ ...props }) : component;
}
