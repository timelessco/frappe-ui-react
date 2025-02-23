import { Icon, type IconProps } from "@/components/ui/icon";

export const AddIcon = (props: IconProps) => (
	<Icon fill="none" viewBox="0 0 16 16" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M8.5 2.5a.5.5 0 0 0-1 0v5h-5a.5.5 0 0 0 0 1h5v5a.5.5 0 0 0 1 0v-5h5a.5.5 0 0 0 0-1h-5v-5Z"
			clipRule="evenodd"
		/>
	</Icon>
);
