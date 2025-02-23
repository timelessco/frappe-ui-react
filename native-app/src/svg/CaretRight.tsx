import { cssInterop } from 'nativewind';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

export const CaretRight = ({ fill = '#525252', className = '' }: IconProps) => {
	return (
		<Svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" className={className}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.52737 2.557C5.77289 2.29511 6.18423 2.28184 6.44613 2.52737L11.7795 7.52737C11.9105 7.65025 11.9849 7.8219 11.9849 8.00156C11.9849 8.18123 11.9105 8.35288 11.7795 8.47576L6.44613 13.4758C6.18423 13.7213 5.77289 13.708 5.52737 13.4461C5.28184 13.1842 5.29511 12.7729 5.557 12.5274L10.3845 8.00156L5.557 3.47576C5.29511 3.23024 5.28184 2.8189 5.52737 2.557Z"
				fill={fill}
			/>
		</Svg>
	);
};

cssInterop(CaretRight, {
	className: {
		target: true,
		nativeStyleToProp: { fill: true },
	},
});
