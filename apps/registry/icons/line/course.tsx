import { Icon, type IconProps } from "@/components/ui/icon";

export const CourseIcon = (props: IconProps) => (
	<Icon fill="none" viewBox="0 0 16 16" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M2.5 2A1.5 1.5 0 0 0 1 3.5v8A2.5 2.5 0 0 0 3.5 14h9.002a2.5 2.5 0 0 0 2.5-2.5v-8a1.5 1.5 0 0 0-1.5-1.5h-2.501c-1.273 0-2.387.68-3 1.696a3.498 3.498 0 0 0-3-1.696H2.5Zm6.001 11V5.466A2.5 2.5 0 0 1 11.001 3h2.501a.5.5 0 0 1 .5.5v8a1.5 1.5 0 0 1-1.5 1.5h-4Zm-1-7.533A2.5 2.5 0 0 0 5.001 3H2.5a.5.5 0 0 0-.5.5v8A1.5 1.5 0 0 0 3.5 13h4.001V5.466Z"
			clipRule="evenodd"
		/>
	</Icon>
);
