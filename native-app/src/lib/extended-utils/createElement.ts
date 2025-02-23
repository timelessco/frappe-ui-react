import React from 'react';

interface CreateElementProps<Props extends object> {
	componentType: React.ComponentType<Props>;
	props: Props;
}

export function createElement<Props extends object>({
	componentType,
	props,
}: CreateElementProps<Props>): React.ReactElement<Props> {
	return React.createElement(componentType, props);
}
