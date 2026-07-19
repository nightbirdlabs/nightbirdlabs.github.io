export type Post = {
	slug: string;
	title: string;
	author: string;
	date: string;
	editDate: string;
	description?: string;
	image?: string;
	imageSvg?: string;
	tags?: string[];
}
