import {
	redux,
	mongodb,
	offernights,
	coproperty,
	cyop,
	socrates,
	ai_3d_tshirts,
	ai_summarizer,
	astro,
	chat_gpt,
	cns_portfolio,
	css,
	currency_list,
	dcreative,
	discord,
	doctoratwork,
	doctoratwork1,
	flutter,
	freelance,
	game_2048,
	git,
	github_alt,
	html,
	javascript,
	linkedin,
	qwik,
	reactjs,
	social_network,
	space_invaders,
	tailwind,
	threejs,
	typescript,
	vite,
	webpack,
	django,
	laravel,
	nodejs,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
	{
		id: 'download',
		title: 'Download',
	},
];

const technologies = [
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React',
		icon: reactjs,
	},
	{
		name: 'Redux',
		icon: redux,
	},
	{
		name: 'Flutter',
		icon: flutter,
	},
	{
		name: 'ThreeJS',
		icon: threejs,
	},
	// {
	// 	name: 'Qwik',
	// 	icon: qwik,
	// },
	// {
	// 	name: 'Astro',
	// 	icon: astro,
	// },
	{
		name: 'HTML5',
		icon: html,
	},
	{
		name: 'NodeJs',
		icon: nodejs,
	},
	
	// {
	// 	name: 'CSS3',
	// 	icon: css,
	// },
	{
		name: 'Tailwind',
		icon: tailwind,
	},
	{
		name: 'Git',
		icon: git,
	},
	{
		name: 'Webpack',
		icon: webpack,
	},
	{
		name: 'Laravel',
		icon: laravel,
	},
	{
		name: 'Vite',
		icon: vite,
	},

	{
		name: 'Django',
		icon: django,
	},
	{
		name: 'Monogdb',
		icon: mongodb,
	},
];

const experiences = [
	{
		title: 'Full-stack Developer',
		company_name: 'Learn with Socrates',
		icon: doctoratwork,
		iconBg: '#383E56',
		date: 'September 2020 - Present',
		points: [
			'Developing and maintaining web applications using React, Django, MUI, ThreeJS, TailwindCSS and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	// {
	// 	title: 'Web Developer',
	// 	company_name: 'Doctor At Work',
	// 	icon: doctoratwork1,
	// 	iconBg: '#E6DEDD',
	// 	date: 'September 2020 - February 2021',
	// 	points: [
	// 		'Developing and maintaining websites using JavaScript, HTML5, CSS3, SCSS, Canvas and other related technologies.',
	// 		'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
	// 		'Implementing responsive design and ensuring cross-browser compatibility.',
	// 	],
	// },
	{
		title: 'Full-stack Web Developer',
		company_name: 'Cyber Infrastructure',
		icon: freelance,
		iconBg: '#383E56',
		date: 'January 2018 - September 2020',
		points: [
			'Developing and maintaining websites using Next.js, Nest.js, HTML5, CSS3, SASS and other related technologies.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
		],
	},
	{
		title: 'Full-stack Web Developer',
		company_name: 'TerraForm',
		icon: freelance,
		iconBg: '#383E56',
		date: 'March 2016 - January 2018',
		points: [
			'Planned, developed, tested, deployed, and maintained web applications using Laravel, Vue.js , HTML5, CSS3, and other related technologies.',
			'Communicated effectively using a variety of communication skills.',
		],
	},
];

const projects = [
	{
		name: 'Learn with Socrates',
		description:
			'A website project aimed at providing children with the opportunity to explore various subjects, such as English, Finance, and more, to enhance their knowledge and learning.',
		tags: [
			{
				name: 'threejs',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'Django',
				color: 'yellow-text-gradient',
			},
		],
		image: socrates,
		// source_code_link: 'https://github.com/exslym/3D-AI-Project/',
		website_link: 'https://practiceplaygrow.com',
	},
	{
		name: '3D T-Shirts Design with AI',
		description:
			'A website project where you can make custom design t-shirts in 3D with the help of AI in real-time. You can also choose color or upload your own images to make your t-shirt truly unique.',
		tags: [
			{
				name: 'threejs',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'openai',
				color: 'yellow-text-gradient',
			},
		],
		image: ai_3d_tshirts,
		source_code_link: 'https://github.com/angel19940303/T-shirt-design',
		website_link: 'https://exslym.github.io/3D-AI-Project/',
	},
	
	// {
	// 	name: 'ChatGPT App (web vers.)',
	// 	description:
	// 		'A website version of mobile app ChatGPT project where you can interact with openAI chatbot based on gpt-3.5-turbo-0301 model, also you can choose other model on the fly.',
	// 	tags: [
	// 		{
	// 			name: 'dart',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'flutter',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'openai-api',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: chat_gpt,
	// 	source_code_link: 'https://github.com/exslym/ChatGPT_App/',
	// 	website_link: 'https://chat-gpt-app-kohl.vercel.app/',
	// },
	{
		name: 'Cryptocurrency Trends',
		description:
			'A website version of mobile App created using the Flutter framework. The app provides real-time information about the prices of various cryptocurrencies such as Bitcoin, Ethereum, Litecoin, and many others.',
		tags: [
			{
				name: 'dart',
				color: 'blue-text-gradient',
			},
			{
				name: 'flutter',
				color: 'green-text-gradient',
			},
			{
				name: 'bloc',
				color: 'pink-text-gradient',
			},
			{
				name: 'firebase',
				color: 'yellow-text-gradient',
			},
		],
		image: currency_list,
		source_code_link: 'https://github.com/angel19940303/cryptocurrency-trends',
		website_link: 'https://cryptocurrency-prices-exslym.vercel.app/',
	},
	{
		name: 'Cyop',
		description:
			'This is DAO project where investors simply invest into an ever recharging crypto fund, the CyOp Protocol, constantly triggerring a massive buying frenzy on any given ERC-20 token.',
		tags: [
			{
				name: 'Next.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'ExpressJS',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
		],
		image: cyop,
		// source_code_link: 'https://github.com/exslym/AI-Summarizer/',
		website_link: 'https://cyop.io',
	},
	// {
	// 	name: 'Social Network',
	// 	description:
	// 		'A social network project is a dynamic web application (SPA) that allows users to search and interact with each other by liking, commenting on posts or chatting.',
	// 	// description:
	// 	// 'A social network project is a web application (SPA) that allows users to search and interact with each other by liking, commenting on posts or chatting. ReactJS have been used as the primary front-end framework to create dynamic and interactive user interfaces that update in real-time.',
	// 	tags: [
	// 		{
	// 			name: 'typescript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'react',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'ant-design',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: social_network,
	// 	source_code_link: 'https://github.com/exslym/My-Social-Network/',
	// 	website_link: 'https://exslym.github.io/My-Social-Network/',
	// },
	{
		name: 'Co-property',
		description:
			'This is a popular puzzle game where the player must combine numbered tiles to reach the ultimate goal of creating a tile with the number 2048. When two tiles with the same number collide, they merge into one tile with a value equal to the sum of the two.',
		tags: [
			{
				name: 'React',
				color: 'blue-text-gradient',
			},
			{
				name: 'Nest.js',
				color: 'pink-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: coproperty,
		// source_code_link: 'https://github.com/exslym/2048-Game/',
		website_link: 'https://coproperty.io',
	},
	{
		name: 'Offernights',
		description:
			'This is a real-estate project using Nest.js, React-typescript and openstreetapi. Customers can review available property around certain points and contact with realtor.',
		tags: [
			{
				name: 'Nest.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'React-typescript',
				color: 'green-text-gradient',
			},
			{
				name: 'openstreetapi',
				color: 'pink-text-gradient',
			},
		],
		image: offernights,
		source_code_link: 'https://github.com/angel19940303/offernights-frontend',
		// website_link: 'https://exslym.github.io/D-Creative-Studio/',
	},
	// {
	// 	name: 'Space Invaders [Game]',
	// 	description:
	// 		'Web-based legendary classic arcade game Space Invaders made with JavaScript and Canvas with its iconic pixel graphics and addictive gameplay with mobile adaptivity and touch controls.',
	// 	tags: [
	// 		{
	// 			name: 'javascript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'canvas',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'scss',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: space_invaders,
	// 	source_code_link: 'https://github.com/exslym/Space-Invaders_GAME/',
	// 	website_link: 'https://exslym.github.io/Space-Invaders_GAME/',
	// },

	// {
	// 	name: 'CNS-Portfolio',
	// 	description:
	// 		"The multi-page website with interactive educational question-answer quiz for physicians that helps to learn about treatment options and appropriate drug prescribing based on patient's history and various health conditions.",
	// 	tags: [
	// 		{
	// 			name: 'javascript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'multipage',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'scss',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: cns_portfolio,
	// 	source_code_link: 'https://github.com/exslym/CNS-Portfolio/',
	// 	website_link: 'https://exslym.github.io/CNS-Portfolio/',
	// },
];

const socials = [
	{
		name: 'linkedin',
		icon: linkedin,
		link: 'www.linkedin.com/in/brwstewart',
	},
	{
		name: 'github',
		icon: github_alt,
		link: 'https://github.com/angel19940303/',
	},
	{
		name: 'discord',
		icon: discord,
		link: 'https://discordapp.com/users/1130409442882617375/',
	},
];

export { experiences, projects, socials, technologies };
