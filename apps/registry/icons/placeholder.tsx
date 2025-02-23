import { Icon, type IconProps } from "@/components/ui/icon";

type PlaceholderProps = IconProps;

export const PlaceholderIcon = (props: PlaceholderProps) => (
	<Icon fill="none" viewBox="0 0 16 16" {...props}>
		<g clipPath="url(#placeholder-icon)">
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M7.5.79a.7.7 0 0 1 1 0l6.7 6.71a.7.7 0 0 1 0 1l-3.36 3.35-3.36 3.36a.7.7 0 0 1-.99 0l-3.35-3.36L.79 8.5a.7.7 0 0 1 0-.99l3.36-3.35L7.5.79Zm.5.92L4.85 4.85 1.71 8l3.14 3.15L8 14.29l3.15-3.14L14.29 8 8 1.7Z"
				clipRule="evenodd"
			/>
		</g>
		<defs>
			<clipPath id="placeholder-icon">
				<path fill="currentColor" d="M0 0h16v16H0z" />
			</clipPath>
		</defs>
	</Icon>
);
