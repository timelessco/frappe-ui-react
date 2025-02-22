import { type NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = {
	outputFileTracingIncludes: {
		registry: ["./registry/**/*"],
	},
	pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX()(nextConfig);
