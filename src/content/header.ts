export interface NavLink {
	label: string;
	href: string;
}

export interface HeaderContent {
	name: string;
	nav: NavLink[];
}

export const header: HeaderContent = {
	name: 'Aditya Banerjee',
	nav: [
		{ label: 'About', href: '/about' },
		{ label: 'Timeline', href: '/timeline' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Blog', href: '/blog' },
	],
};
