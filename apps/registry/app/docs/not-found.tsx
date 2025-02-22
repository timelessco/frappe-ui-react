export default function NotFound() {
	return (
		<div className="prose dark:prose-invert">
			<h1>404 - Page Not Found</h1>
			<p>The requested documentation page could not be found.</p>
		</div>
	);
}

export const generateMetadata = async () => {
	return {
		title: "404 - Page Not Found",
	};
};
