import { cssInterop } from 'nativewind';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

export const Location = ({ fill = '#525252', className = '' }: IconProps) => {
	return (
		<Svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={className}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.00334 0.351562C1.97035 0.351562 -0.157043 5.12834 2.54088 8.12604L5.14855 11.0234C5.60538 11.531 6.4013 11.531 6.85813 11.0234L9.4658 8.12604C12.1637 5.12834 10.0363 0.351562 6.00334 0.351562ZM3.50717 7.25638C1.56216 5.09527 3.09586 1.65156 6.00334 1.65156C8.91083 1.65156 10.4445 5.09527 8.49952 7.25638L6.00334 10.0299L3.50717 7.25638ZM7.00284 5.00156C7.00284 5.55385 6.55512 6.00156 6.00284 6.00156C5.45055 6.00156 5.00284 5.55385 5.00284 5.00156C5.00284 4.44928 5.45055 4.00156 6.00284 4.00156C6.55512 4.00156 7.00284 4.44928 7.00284 5.00156Z"
				fill={fill}
			/>
		</Svg>
	);
};

cssInterop(Location, {
	className: {
		target: true,
		nativeStyleToProp: { fill: true },
	},
});
