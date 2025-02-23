import { cssInterop } from 'nativewind';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { IconProps } from './types';

export const Clock = ({ fill = '#525252', className = '' }: IconProps) => {
	return (
		<Svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
			<G clipPath="url(#clip0_57_90)">
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M1.3625 6.0014C1.3625 3.43941 3.43941 1.3625 6.0014 1.3625C8.5634 1.3625 10.6403 3.43941 10.6403 6.0014C10.6403 8.5634 8.5634 10.6403 6.0014 10.6403C3.43941 10.6403 1.3625 8.5634 1.3625 6.0014ZM6.0014 0.0625C2.72144 0.0625 0.0625 2.72144 0.0625 6.0014C0.0625 9.28137 2.72144 11.9403 6.0014 11.9403C9.28137 11.9403 11.9403 9.28137 11.9403 6.0014C11.9403 2.72144 9.28137 0.0625 6.0014 0.0625ZM6.65156 4.00156C6.65156 3.64258 6.36055 3.35156 6.00156 3.35156C5.64258 3.35156 5.35156 3.64258 5.35156 4.00156V6.50156C5.35156 6.71889 5.46018 6.92184 5.64101 7.0424L7.14101 8.0424C7.4397 8.24152 7.84327 8.16081 8.0424 7.86212C8.24152 7.56342 8.16081 7.15986 7.86212 6.96073L6.65156 6.15369V4.00156Z"
					fill={fill}
				/>
			</G>
			<Defs>
				<ClipPath id="clip0_57_90">
					<Rect width="12" height="12" fill="white" />
				</ClipPath>
			</Defs>
		</Svg>
	);
};

cssInterop(Clock, {
	className: {
		target: true,
		nativeStyleToProp: { fill: true },
	},
});
