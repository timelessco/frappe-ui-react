import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Frappe UI React",
	description:
		"Frappe UI React is a React library for building web applications using Espresso UI, a design system for building beautiful, responsive, and accessible web applications. 100% Shadcn compatible.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} antialiased`}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
				<TailwindIndicator />
			</body>
		</html>
	);
}
