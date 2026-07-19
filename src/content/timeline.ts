export interface TimelineItem {
	name: string;
	date: string;
	description: string;
	imageHref?: string;
	longDescription: string[];
}

export const timeline: TimelineItem[] = [
	{
		name: '📚 OFS',
		date: 'Aug 2015',
		description:
			'Took computer science at the higher level under the international baccalaureate program at the Overseas Family School, Singapore.',
		imageHref: 'https://abme-timeline-images.s3.eu-west-2.amazonaws.com/ofs-graduation.jpg',
		longDescription: [
			'I started the International Baccalaureate Programme at the Overseas Family School in Singapore in August 2015.',
			'My subjects included Computer Science, Economics and Theatre at the higher level, and French, Mathematics and English Language and Literature at the standard level.',
			"Outside of academics, I was also heavily involved in the school's cultural and sporting activities, including theatre productions, music concerts and cricket matches.",
			'Having gained a strong theoretical knowledge of computer science and hands-on experience with Java programming, I decided to pursue undergraduate studies in Computer Science.',
		],
	},
	{
		name: '🇸🇬 SAF',
		date: 'Jul 2017',
		description:
			'Served national service in the Singapore Armed Forces as a 3rd sergeant at the 42nd Singapore Armoured Regiment.',
		imageHref: 'https://abme-timeline-images.s3.eu-west-2.amazonaws.com/saf.jpg',
		longDescription: [
			'I enlisted in the Singapore Armed Forces in July 2017. I started my service as a recruit in 1st Company, Basic Military Training Centre School 4 in Pulau Tekong.',
			'On the merit of my performance in BMT, I was selected to attend the Specialist Cadet School (SCS) at Pasir Laba Camp to train to become a 3rd Sergeant, with the second portion of training conducted at the Armour Training Institute (ATI) at Sungei Gedong camp.',
			"Upon completion of my training at ATI, I was sent to train in Germany for a month under exercise Panzer Strike. Upon my return, I was posted to the 42nd Singapore Armoured Regiment, where I served as a 3rd sergeant.",
			'During my time in the SAF, I was known for maintaining an extremely high level of fitness, consistently scoring above 90 in fitness tests graded out of 100.',
		],
	},
	{
		name: '🎓 NUS',
		date: 'Aug 2019',
		description:
			'Enrolled in the Bachelor of Computing Program at the National University of Singapore, majoring in Computer Science.',
		imageHref: 'https://abme-timeline-images.s3.eu-west-2.amazonaws.com/nus.jpg',
		longDescription: [
			'In August 2019, I enrolled in the Bachelor of Computing Program at the National University of Singapore, majoring in Computer Science.',
			'I was also able to secure a stay at Residential College 4 (RC4), a coveted residence for students that pass the interview process, for the first 2 years of my study.',
			"During my time at NUS, I was a member of Amplified, a student-led collection of rock bands where I performed as a vocalist and drummer. I also co-captained RC4's Dodgeball team, and was the publicity head for RC4's Musical Expression Club.",
			'Due to my warm and outgoing personality, I was selected as an orientation group leader (OGL) for 2 successive years, helping 2 new batches of students find their feet in NUS and at RC4.',
		],
	},
	{
		name: '🧮 Strive Math',
		date: 'May 2020',
		description: 'Started my first software engineering internship with Strive Math (YC21).',
		imageHref: 'https://abme-timeline-images.s3.eu-west-2.amazonaws.com/strive-math.JPG',
		longDescription: [
			'In May 2020, I started an internship with Strive Math (YC21), a then pre-seed startup providing tailored online mathematics and coding lessons.',
			'I worked at Strive as a software engineering intern, as well as a tutor. My key contributions included the automation of payroll, quality control and analytics systems, and I consistently received positive feedback from students and parents for my tutoring.',
		],
	},
	{
		name: '👨🏽‍🏫 OURFinals',
		date: 'Dec 2020',
		description:
			'Established an ad-hoc on-demand peer tutoring platform for university students. Conducted a Python coding bootcamp with the team.',
		imageHref: 'https://abme-timeline-images.s3.eu-west-2.amazonaws.com/ourfinals.jpeg',
		longDescription: [
			'OURFinals was an ad-hoc on-demand peer tutoring service for university students, aiming to bring students and peer tutors together on a per-gig basis.',
			'I launched the company with my batch-mates Robin, Arnav and Niki. This was my first exposure to conceptualising and launching a business. Although the startup did not take off, I learned valuable lessons to apply to my next venture.',
		],
	},
	{
		name: '🏫 NOC',
		date: 'Aug 2021',
		description: 'Enrolled in the NUS Overseas Colleges (NOC) Programme.',
		imageHref: 'https://abme-timeline-images.s3.eu-west-2.amazonaws.com/noc.jpg',
		longDescription: [
			'In August 2021, I was accepted into the NUS Overseas Colleges (NOC) Programme after passing a rigorous interview process.',
			'The programme is designed to provide students with a unique opportunity to study abroad and gain international experience in fields such as business and engineering.',
			'The programme also includes entrepreneurship classes at a partner university, teaching students about startup culture and giving practical experience conceptualising and launching a business.',
			'Through the NOC Programme, I was able to gain valuable experience in a foreign country, broadening my perspective and developing my language skills.',
		],
	},
	{
		name: '💻 ByondXR',
		date: 'Jan 2022',
		description: 'Started an internship with ByondXR as a frontend developer.',
		imageHref: 'https://abme-timeline-images.s3.eu-west-2.amazonaws.com/byondxr.jpg',
		longDescription: [
			'As part of the NUS Overseas Colleges (NOC) Programme, I started an internship with ByondXR in January 2022.',
			'ByondXR is an extended-reality e-commerce company that uses their virtual store builder to create immersive shopping experiences for a range of high-profile luxury fashion brands.',
			"Initially, I worked on Byond's legacy platform, creating RxJS plugins to add interactivity to virtual stores. I was later transferred to the team responsible for the company's new store builder platform, built using ReactJS, GraphQL and MongoDB.",
			'I continued to work part-time with ByondXR until February 2023.',
		],
	},
	{
		name: '⚡️ FNSHR',
		date: 'Mar 2023',
		description:
			'Established FNSHR, a task management platform that leveraged social and monetary accountability to incentivise task completion.',
		imageHref: 'https://abme-timeline-images.s3.eu-west-2.amazonaws.com/FNSHR.png',
		longDescription: [
			'FNSHR (pronounced "finisher") was a task management platform that leveraged social and monetary accountability to encourage task completion.',
			"I conceptualised it with my fellow NOC alumni Robin and Asaad, and together we pitched it at the N-House Pitch Night at NUS, finishing in second place and earning a spot in a final-round pitch to NUS Enterprise, NUS's VC arm. We were unable to secure seed funding and halted operations, but I still believe in the idea.",
		],
	},
	{
		name: '👨🏽‍🎓 Graduation',
		date: 'Jul 2023',
		description: 'Graduated from NUS with a Bachelor of Computing (Honours) degree in Computer Science.',
		imageHref: 'https://abme-timeline-images.s3.eu-west-2.amazonaws.com/uni-grad.jpg',
		longDescription: [
			'In July 2023, I graduated from NUS with a Bachelor of Computing (Honours) degree in Computer Science.',
		],
	},
	{
		name: '👔 Activate Interactive',
		date: 'Aug 2023',
		description: 'Began my first full-time job as a full-stack developer at Activate Interactive.',
		imageHref: 'https://abme-timeline-images.s3.eu-west-2.amazonaws.com/work-laptop.JPG',
		longDescription: [
			'Upon graduating from NUS, I commenced my first job as a Senior Programmer Analyst at Activate Interactive.',
			'I was assigned as a full-stack developer for the CRISP project: a secure and compliant automated cloud environment and resource provisioning platform, developed in collaboration with Amazon Web Services Singapore and the Singapore Ministry of Manpower.',
			'I developed significant portions of 4 out of the 7 backend microservices for the project, as well as the corresponding frontend modules, and authored a large number of automation scripts to improve developer experience.',
			'Through this experience, I gained expertise with NodeJS, Express, React, PostgreSQL and various AWS services.',
		],
	},
	{
		name: '🇬🇧 London',
		date: 'Feb 2025',
		description: 'Moved to London to pursue my career goals.',
		imageHref: 'https://abme-timeline-images.s3.eu-west-2.amazonaws.com/adi-in-london.jpg',
		longDescription: [
			"After graduating from NUS, I became eligible for the UK's High Potential Individual (HPI) visa.",
			'Having been granted the visa, I decided to explore opportunities in London, relocating in February 2025.',
		],
	},
];
