import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarComp() {
	return (
		<div className="flex items-center gap-4">
			<Avatar size="xs">
				<AvatarImage src="https://github.com/shadcn.png" />
			</Avatar>
			<Avatar size="sm">
				<AvatarImage src="https://github.com/shadcn.png" />
			</Avatar>
			<Avatar size="md">
				<AvatarImage src="https://github.com/shadcn.png" />
			</Avatar>
			<Avatar size="lg">
				<AvatarImage src="https://github.com/shadcn.png" />
			</Avatar>
			<Avatar size="xl">
				<AvatarImage src="https://github.com/shadcn.png" />
			</Avatar>
			<Avatar size="2xl">
				<AvatarImage src="https://github.com/shadcn.png" />
			</Avatar>
			<Avatar size="3xl">
				<AvatarImage src="https://github.com/shadcn.png" />
			</Avatar>
			<Avatar size="xs">
				<AvatarFallback>N</AvatarFallback>
			</Avatar>
			<Avatar size="sm">
				<AvatarFallback>N</AvatarFallback>
			</Avatar>
			<Avatar size="md">
				<AvatarFallback>N</AvatarFallback>
			</Avatar>
			<Avatar size="lg">
				<AvatarFallback>N</AvatarFallback>
			</Avatar>
			<Avatar size="xl">
				<AvatarFallback>N</AvatarFallback>
			</Avatar>
			<Avatar size="2xl">
				<AvatarFallback>N</AvatarFallback>
			</Avatar>
			<Avatar size="3xl">
				<AvatarFallback>N</AvatarFallback>
			</Avatar>
		</div>
	);
}
