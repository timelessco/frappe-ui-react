import { cssInterop } from 'nativewind';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

export const CaretDown = ({ fill = '#525252', className = '' }: IconProps) => {
	return (
		<Svg width="100%" height="100%" viewBox="0 0 16 16" fill="none">
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.27145 5.84664C3.46671 5.65138 3.78329 5.65138 3.97855 5.84664L8 9.86809L12.0214 5.84664C12.2167 5.65138 12.5333 5.65138 12.7286 5.84664C12.9238 6.0419 12.9238 6.35849 12.7286 6.55375L8.35355 10.9287C8.15829 11.124 7.84171 11.124 7.64645 10.9287L3.27145 6.55375C3.07618 6.35849 3.07618 6.0419 3.27145 5.84664Z"
				fill={fill}
			/>
		</Svg>
	);
};

cssInterop(CaretDown, {
	className: {
		target: true,
		nativeStyleToProp: { fill: true },
	},
});
