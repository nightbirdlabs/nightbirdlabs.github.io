export type Post = {
	slug: string;
	title: string;
	author: string;
	date: string;
	description?: string;
	image?: string;
	imageSvg?: string;
	tags?: string[];
}
