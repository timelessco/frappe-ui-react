import { cssInterop } from 'nativewind';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

export const Slot = ({ fill = '#525252', className = '' }: IconProps) => {
	return (
		<Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.5042 1.28706C11.7776 1.01369 12.2208 1.01369 12.4942 1.28706L22.7113 11.5042C22.9847 11.7776 22.9847 12.2208 22.7113 12.4942L17.6027 17.6027L12.4942 22.7113C12.2208 22.9847 11.7776 22.9847 11.5042 22.7113L6.39564 17.6027L1.28706 12.4942C1.01369 12.2208 1.01369 11.7776 1.28706 11.5042L6.39564 6.39564L11.5042 1.28706ZM11.9992 2.2063L7.10274 7.10274L2.2063 11.9992L7.10274 16.8956L11.9992 21.7921L16.8956 16.8956L21.7921 11.9992L11.9992 2.2063Z"
				fill={fill}
			/>
		</Svg>
	);
};

cssInterop(Slot, {
	className: {
		target: true,
		nativeStyleToProp: { fill: true },
	},
});
