export type SocialPlatform = 'github' | 'linkedin' | 'email' | 'facebook' | 'instagram';

export interface SocialLink {
	platform: SocialPlatform;
	label: string;
	href: string;
}

export interface FooterContent {
	social: SocialLink[];
}

export const footer: FooterContent = {
	social: [
		{ platform: 'github', label: 'GitHub', href: 'https://github.com/adidoesnt' },
		{
			platform: 'linkedin',
			label: 'LinkedIn',
			href: 'https://linkedin.com/in/aditya-banerjee-6065281b1/',
		},
		{ platform: 'email', label: 'Email', href: 'mailto:aditya_banerjee@icloud.com' },
		{
			platform: 'facebook',
			label: 'Facebook',
			href: 'https://www.facebook.com/aditya.banerjee3',
		},
		{ platform: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/adidoesnt/' },
	],
};
