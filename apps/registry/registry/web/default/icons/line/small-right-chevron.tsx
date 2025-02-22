import { Icon, type IconProps } from "@/components/ui/icon";

type SmallRightChevronProps = IconProps;

export const SmallRightChevronIcon = (props: SmallRightChevronProps) => (
	<Icon fill="none" viewBox="0 0 16 16" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M5.64 12.1a.5.5 0 0 1 .02-.71L9.26 8l-3.6-3.39a.5.5 0 0 1 .68-.72l4 3.75a.5.5 0 0 1 0 .72l-4 3.75a.5.5 0 0 1-.7-.02Z"
			clipRule="evenodd"
		/>
	</Icon>
);
