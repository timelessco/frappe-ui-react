import Link from "next/link";
import { GithubIcon } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import Logo from "@/icons/logo";

import { Button } from "./ui/button";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="relative mx-auto flex w-full max-w-[540px] items-center justify-between p-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
				<div className="flex items-center gap-2">
					<Logo className="text-lg" />
					<Link href="/" className="font-semibold">
						Frappe UI React
					</Link>
				</div>
				<div className="flex items-center gap-4">
					<Link href="https://github.com/timelessco/frappe-ui-react">
						<Button size="sm" variant="subtle" iconOnly={<GithubIcon />} />
					</Link>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
