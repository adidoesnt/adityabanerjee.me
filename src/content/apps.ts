export type AppIcon = 'UserRound' | 'MessageCircleQuestionMark' | 'History' | 'FolderGit2' | 'Rss';

export interface AppLink {
	id: string;
	label: string;
	href: string;
	icon: AppIcon;
}

export const apps: AppLink[] = [
	{ id: 'whoami', label: 'whoami', href: '/whoami', icon: 'UserRound' },
	{ id: 'about', label: 'about', href: '/about', icon: 'MessageCircleQuestionMark' },
	{ id: 'timeline', label: 'timeline', href: '/timeline', icon: 'History' },
	{ id: 'projects', label: 'projects', href: '/projects', icon: 'FolderGit2' },
	{ id: 'blog', label: 'blog', href: '/blog', icon: 'Rss' },
];
