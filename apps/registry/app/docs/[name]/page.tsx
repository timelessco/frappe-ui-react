import { notFound } from "next/navigation";

export default async function Page({
	params,
}: {
	params: Promise<{ name: string }>;
}) {
	const name = (await params).name;

	try {
		const { default: Post } = await import(`../content/${name}.mdx`);

		return (
			<div className="prose dark:prose-invert">
				<Post />
			</div>
		);
	} catch {
		notFound();
	}
}

export const dynamicParams = true;

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ name: string }>;
}) => {
	const name = (await params).name;
	return {
		title: name
			.replaceAll("-", " ")
			.replaceAll(/\b\w/gu, (char) => char.toUpperCase()),
	};
};
