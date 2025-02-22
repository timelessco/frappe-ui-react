import { Avatar, AvatarIcon, AvatarImage } from "@/components/ui/avatar";
import { UserIcon } from "@/icons/solid/user";

export function AvatarSquaredComp() {
	return (
		<div className="flex items-center gap-4">
			<Avatar size="xs" status="active">
				<AvatarImage src="https://github.com/shadcn.png" />
			</Avatar>
			<Avatar size="sm" status="away">
				<AvatarImage src="https://github.com/shadcn.png" />
			</Avatar>
			<Avatar size="md" status="sleep">
				<AvatarImage src="https://github.com/shadcn.png" />
			</Avatar>
			<Avatar size="lg" status="pinned">
				<AvatarImage src="https://github.com/shadcn.png" />
			</Avatar>
			<Avatar size="xl" status="pin">
				<AvatarImage src="https://github.com/shadcn.png" />
			</Avatar>
			<Avatar size="2xl" status="active">
				<AvatarImage src="https://github.com/shadcn.png" />
			</Avatar>
			<Avatar size="3xl" status="active">
				<AvatarImage src="https://github.com/shadcn.png" />
			</Avatar>

			<Avatar size="xs" squared>
				<AvatarIcon>
					<UserIcon />
				</AvatarIcon>
			</Avatar>
			<Avatar size="sm" squared>
				<AvatarIcon>
					<UserIcon />
				</AvatarIcon>
			</Avatar>
			<Avatar size="md" squared>
				<AvatarIcon>
					<UserIcon />
				</AvatarIcon>
			</Avatar>
			<Avatar size="lg" squared>
				<AvatarIcon>
					<UserIcon />
				</AvatarIcon>
			</Avatar>
			<Avatar size="xl" squared>
				<AvatarIcon>
					<UserIcon />
				</AvatarIcon>
			</Avatar>
			<Avatar size="2xl" squared>
				<AvatarIcon>
					<UserIcon />
				</AvatarIcon>
			</Avatar>
			<Avatar size="3xl" squared>
				<AvatarIcon>
					<UserIcon />
				</AvatarIcon>
			</Avatar>
		</div>
	);
}
