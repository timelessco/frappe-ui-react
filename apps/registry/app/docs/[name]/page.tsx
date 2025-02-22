export default async function Page({
	params,
}: {
	params: Promise<{ name: string }>;
}) {
	const name = (await params).name;
	console.log(name);
	const { default: Post } = await import(`../content/${name}.mdx`);

	return <Post />;
}

export function generateStaticParams() {
	return [{ name: "welcome" }, { slug: "about" }];
}

export const dynamicParams = false;

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
