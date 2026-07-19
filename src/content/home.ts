export interface HomeContent {
	displayImage: string;
	tagline: string[];
	role: string;
	education: string;
}

export const home: HomeContent = {
	displayImage: '/adi.jpg',
	tagline: ['Full-time developer, part-time musician.', 'JavaScript is my poison of choice.'],
	role: 'Fullstack AI Engineer @ Spotify',
	education: "NUS Computer Science '23",
};
