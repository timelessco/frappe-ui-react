import { cssInterop } from 'nativewind';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

export const Slot = ({ fill = '#525252', className = '' }: IconProps) => {
	return (
		<Svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" className={className}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 4.25C2 3.42157 2.67157 2.75 3.5 2.75H12.5C13.3284 2.75 14 3.42157 14 4.25L14 4.76393C14 5.1427 13.786 5.48897 13.4472 5.65836L8.44721 8.15836C8.16569 8.29912 7.83431 8.29912 7.55279 8.15836L2.55279 5.65836C2.214 5.48897 2 5.1427 2 4.76393V4.25ZM1 4.76393V4.25C1 2.86929 2.11929 1.75 3.5 1.75H12.5C13.8807 1.75 15 2.86929 15 4.25L15 4.76393L15 11.75C15 13.1307 13.8807 14.25 12.5 14.25H3.5C2.11929 14.25 1 13.1307 1 11.75V4.76393ZM14 6.496V11.75C14 12.5784 13.3284 13.25 12.5 13.25H3.5C2.67157 13.25 2 12.5784 2 11.75V6.496C2.03447 6.51589 2.06967 6.53484 2.10557 6.55279L7.10557 9.05279C7.66863 9.33431 8.33137 9.33431 8.89443 9.05279L13.8944 6.55279C13.9303 6.53484 13.9655 6.51589 14 6.496Z"
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
