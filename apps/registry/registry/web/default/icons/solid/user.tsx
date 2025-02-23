import { Icon, type IconProps } from "@/components/ui/icon";

export const UserIcon = (props: IconProps) => (
	<Icon fill="none" viewBox="0 0 16 16" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-.4 1A5.6 5.6 0 0 0 2 13.6c0 .52.38.96.9 1.05l1.62.27c2.3.38 4.65.38 6.96 0l1.63-.27c.51-.09.89-.53.89-1.05C14 10.5 11.5 8 8.4 8h-.8Z"
			clipRule="evenodd"
		/>
	</Icon>
);
