export const SITE = {
	name: 'Jorge Garcia',
	handle: 'jgarcdev',
	tagline: 'New CS grad.',
	description:
		'Portfolio of Jorge Garcia, a recent UT Austin computer science graduate looking for an entry-level role in computer architecture, operating systems, or compilers.',
	education: 'B.S. Computer Science, The University of Texas at Austin',
	status: 'Open to work: seeking my first full-time role',
	resume: '/resume.pdf',
} as const;

export type IconName = 'github' | 'linkedin' | 'youtube' | 'mail' | 'download';

export interface SocialLink {
	label: string;
	href: string;
	icon: IconName;
}

export const LINKS: SocialLink[] = [
	{ label: 'GitHub', href: 'https://github.com/jgarcdev', icon: 'github' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/jorgegarcia04', icon: 'linkedin' },
	{ label: 'YouTube', href: 'https://www.youtube.com/@garciamusic2758', icon: 'youtube' },
	{ label: 'Email', href: 'mailto:jorgegarcia_tx@outlook.com', icon: 'mail' }
];

export interface NavItem {
	label: string;
	href: string;
	addr: string;
}

export const NAV: NavItem[] = [
	{ label: 'about', href: '/about/', addr: '0x00' },
	{ label: 'projects', href: '/projects/', addr: '0x10' },
	{ label: 'blog', href: '/blog/', addr: '0x20' },
	{ label: 'music', href: '/music/', addr: '0x30' },
];