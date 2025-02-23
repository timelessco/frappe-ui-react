import { Icon, type IconProps } from "@/components/ui/icon";

export const SortIcon = (props: IconProps) => (
	<Icon fill="none" viewBox="0 0 16 16" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M5.5 3.5a.5.5 0 0 0-1 0v7.793L2.878 9.672a.5.5 0 0 0-.707.707l2.475 2.475a.499.499 0 0 0 .716-.009l2.466-2.466a.5.5 0 1 0-.707-.707L5.5 11.292V3.5Zm5.87-.337a.499.499 0 0 0-.724-.017L8.171 5.621a.5.5 0 0 0 .707.707l1.623-1.622V12.5a.5.5 0 1 0 1 0V4.708l1.62 1.62a.5.5 0 1 0 .707-.707L11.37 3.163Z"
			clipRule="evenodd"
		/>
	</Icon>
);
