export interface AboutPrompt {
	question: string;
	responses: string[];
}

export interface AboutContent {
	info: string;
	prompts: AboutPrompt[];
}

export const about: AboutContent = {
	info: 'Select a question from below!',
	prompts: [
		{
			question: "🏆 What's your professional background?",
			responses: [
				'I am a full-stack developer with experience across the JavaScript ecosystem, especially the PERN (Postgres, Express, React and Node) stack.',
				"I'm a full-stack JavaScript developer. My key strengths include Node.js, Express and React, although I have experience with a wide range of other technologies too.",
				'I have a background in full-stack development, with a strong focus on Node.js, Express, React and Postgres, among many other technologies.',
			],
		},
		{
			question: '🎓 Where did you study?',
			responses: [
				'I studied higher level computer science under the International Baccalaureate Programme, then completed a Bachelor of Computing (Honours) degree majoring in Computer Science.',
				'I took higher-level computer science for my International Baccalaureate Diploma, and later pursued a Bachelor of Computing (Honours) degree specialising in Computer Science.',
				'My academic journey started with an IB Diploma focused on computer science, followed by a Bachelor of Computing (Honours) degree in Computer Science.',
			],
		},
		{
			question: '💼 What are you currently working on?',
			responses: [
				"I'm currently improving my understanding of cloud technologies through AWS certifications, and strengthening my grasp of Web3, Solidity and Rust through hands-on projects.",
				"I'm working on deepening my cloud and Web3 knowledge, taking on AWS certifications while building projects that use Solidity and Rust.",
				"Right now I'm focused on cloud certifications and hands-on Web3 projects using Solidity and Rust.",
			],
		},
		{
			question: '🛠️ What technologies do you specialise in?',
			responses: [
				"I'm particularly experienced with the JavaScript ecosystem — React, Node.js and Express — and comfortable with a wide range of SQL and NoSQL databases.",
				'My expertise primarily lies in JavaScript and its ecosystem: React, Node.js and Express, alongside solid experience with SQL and NoSQL databases.',
				"I'm well-versed in full-stack JavaScript development, especially React, Node.js and Express, with a solid grasp of Python as well.",
			],
		},
		{
			question: '🚀 Can you tell me about a cool project you have worked on?',
			responses: [
				'I built a chat-history search bot using an embeddings model and a vector database — my first time working hands-on with that kind of stack.',
				'I put together a task-management platform for a pitch competition in just a couple of days, integrated with Stripe for payments.',
				"I'm currently building a holistic fitness and wellness platform, which has been a great opportunity to work with cloud and infrastructure-as-code tooling.",
			],
		},
		{
			question: '🎯 What is this site built with?',
			responses: [
				'This site is built with Astro, Tailwind CSS and daisyUI. I like Astro because it keeps things fast and simple by default, shipping almost no JavaScript unless I ask for it.',
				'Astro, Tailwind CSS and daisyUI power this site. The islands-based approach means most of the site is static, with interactivity added only where it matters.',
				"I built this with Astro and styled it with Tailwind CSS and daisyUI — it's a stack I really enjoy for content-focused sites like this one.",
			],
		},
		{
			question: '🎮 What do you do outside of coding?',
			responses: [
				'Outside of coding, I like watching movies and TV shows, spending time with family and friends, singing and playing guitar, cooking and exercising.',
				"When I'm not coding, I enjoy watching films, hanging out with the people I care about, playing guitar, cooking, and staying active.",
				'Beyond coding, I unwind with music, movies, cooking and exercise.',
			],
		},
		{
			question: '📖 Where do you get your favourite tech content?',
			responses: [
				"I've followed Fireship, ThePrimeagen, Theo (t3.gg) and Web Dev Simplified for years. I also use daily.dev and follow a lot of tech-related subreddits.",
				'I regularly watch Fireship, ThePrimeagen, Theo and Web Dev Simplified, and keep up with daily.dev and tech subreddits.',
				'My go-to sources are Fireship, ThePrimeagen, Theo and Web Dev Simplified, plus daily.dev for staying current.',
			],
		},
	],
};
