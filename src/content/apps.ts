export type AppIcon = 'UserRound' | 'MessageCircleQuestionMark' | 'History' | 'FolderGit2' | 'Rss';

export interface AppLink {
	id: string;
	label: string;
	href: string;
	icon: AppIcon;
}

export const apps: AppLink[] = [
	{ id: 'whoami', label: 'whoami', href: '/whoami', icon: 'UserRound' },
	{ id: 'about', label: 'About', href: '/about', icon: 'MessageCircleQuestionMark' },
	{ id: 'timeline', label: 'Timeline', href: '/timeline', icon: 'History' },
	{ id: 'projects', label: 'Projects', href: '/projects', icon: 'FolderGit2' },
	{ id: 'blog', label: 'Blog', href: '/blog', icon: 'Rss' },
];
