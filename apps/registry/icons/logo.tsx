import * as React from "react";

import { Icon } from "@/components/ui/icon";

function Logo(props: React.SVGProps<SVGSVGElement>) {
	return (
		<Icon
			viewBox="0 0 24 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M5.446 1.873c.86-.499 11.98-.81 12.962 0 1.014.842 4.454 6.173 4.27 6.828-.522 1.777-9.276 9.79-10.75 9.79-1.598 0-10.352-8.169-10.751-9.79-.154-.592 3.378-6.298 4.27-6.828zM17.547 8.596l-5.61 10.029m5.61-10.029h5.282m-5.282 0L14.46 1.375m3.086 7.221H1.418"
				stroke="currentColor"
				strokeWidth={1.5}
			/>
		</Icon>
	);
}

export default Logo;
