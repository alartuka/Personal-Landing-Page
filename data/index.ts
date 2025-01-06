export const navItems = [
	{ name: "Home", link: "/" },
	{ name: "About", link: "/#about" },
	// { name: "Projects", link: "#projects" },
	// { name: "Work", link: "#experience" },
	{ name: "Work", link: "/#projects" },
	{ name: "Testimonials", link: "/#testimonials" },
	{ name: "Blog", link: "https://tuka.hashnode.dev/" },
	{ name: "Contact", link: "/#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Dedicated AI Engineer committed to creating innovative & intelligent solutions",
    description: "",
    className: "lg:col-span-3 md:col-span-4 md:row-span-2 lg:min-h-[35vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/images/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I prioritize collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "md:col-span-2 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about leveraging AI to drive meaningful impact",
    description: "",
    className: "md:col-span-3 md:row-span-4",
    imgClassName: "absolute right-0 bottom-0 md:w-76 w-50",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/images/b5.svg",
    spareImg: "/images/grid.svg",
    // "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently honing my skills as a Software Engineering Fellow at Headstarter AI",
    description: "",
    className: "md:col-span-3 md:row-span-1",
    imgClassName: "absolute h-full right-0 md:w-56 w-40",
    titleClassName: "justify-center md:justify-end lg:justify-center top-0",
    img: "/images/HAi-logo",
    spareImg: "/images/grid.svg",
  },
  // {
  //   id: 6,
  //   title: "Do you want to connect or collaborate with me?",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-2 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  //   img: "",
  //   spareImg: "",
  // },
];

export const projects = [
	{
		id: 1,
		title: "Aspirai | HeadstarterAI",
		des: "AI-powered goal achievement partner that helps turn dreams into reality by breaking them down into manageable tasks with personalized recommendations and progress tracking to stay motivated and on track",
		img: "/images/aspirai.png",
		iconLists: ["/images/next.svg"],
		link: "https://aspirai.vercel.app",
		source: "https://github.com/alartuka/Aspirai",
	},

	{
		id: 2,
		title: "Profspector AI | HeadstarterAI",
		des: "RAG-based AI application that can understand and respond to complex queries about professors and courses, while drawing upon a curated dataset for accuracy and relevance",
		img: "/images/profspector.png",
		iconLists: ["/images/next.svg"],
		link: "https://profspector-ai.vercel.app",
		source: "https://github.com/alartuka/Profspector-ai",
	},

	{
		id: 3,
		title: "EruditeSpark AI | HeadstarterAI",
		des: "Web application designed to revolutionize the way students and professionals create, manage, and study flashcards",
		img: "/images/eruditespark.png",
		iconLists: ["/images/next.svg"],
		link: "https://eruditespark-ai.vercel.app/",
		source: "https://github.com/alartuka/EruditeSpark-ai",
	},

	{
		id: 4,
		title: "T-Baymax AI | HeadstarterAI",
		des: "AI-powered personal healthcare companion",
		img: "/images/thumbnail-tbaymax-ai.png",
		iconLists: ["/images/next.svg"],
		link: "",
		source: "https://github.com/alartuka/T-Baymax-AI",
	},

	{
		id: 5,
		title: "IMS-AI | HeadstarterAI",
		des: "AI-powered inventory management system where users can track their inventory items by adding or removing them into the system. Users can also get generated recipes based on the items in their inventory.",
		img: "/images/thumbnail-ims-ai.png",
		iconLists: ["/images/next.svg"],
		link: "",
		source: "https://github.com/alartuka/IMS-AI",
	},
	{
		id: 6,
		title: "ZamanNews",
		des: "Web application that allows users to view news articles from the past on any given date and country. [In progress]",
		img: "",
		iconLists: ["/images/re.svg"],
		link: "",
		source: "https://github.com/alartuka/ZamanNews",
	},
	{
		id: 7,
		title: "mGenAi",
		des: "AI-powered email generator",
		img: "",
		iconLists: [],
		link: "",
		source: "https://github.com/alartuka/mGen_ai",
	},
	{
		id: 8,
		title: "Forage | TechNova22 Hackathon",
		des: "Efficiency optimization system for foodbank operations that makes use of Machine Learning",
		img: "/images/TN22_logo.jpg",
		iconLists: ["/images/re.svg", "/images/tail.svg"],
		link: "",
		source: "https://github.com/alartuka/Forage",
	},
	{
		id: 9,
		title: "ProPy | Academic",
		des: "Image manipulation app, developed with linear algebra fundamentals using processing5.js.",
		img: "/images/ProPy_mockup.png",
		iconLists: [],
		link: "",
		source: "https://github.com/alartuka/ProPy",
	},
	{
		id: 10,
		title: "SupportWall | TechNova21 Hackathon",
		des: "Anonymous support system for students with a sticky-notes organized infinite wall to express themselves anonymously.",
		img: "/images/SupportWall.png",
		iconLists: [],
		link: "",
		source: "https://github.com/alartuka/SupportWall",
	},
	{
		id: 11,
		title: "Runners-Tracker",
		des: "Python GUI developed with tkinter, to track distance ran on entered dates.",
		img: "",
		iconLists: [],
		link: "",
		source: "https://github.com/alartuka/Runners-Tracker",
	},
	{
		id: 12,
		title: "BrInFo | Academic",
		des: "Multi-functional and student-centred program to focus, get inspired or take a break. Includes a 25 minutes timer, quotes random generator, and a game.",
		img: "",
		iconLists: [],
		link: "",
		source: "https://github.com/alartuka/BrInFo",
	},
];

export const testimonials = [
  {
    quote:
      "Tuka was a thoughtful volunteer… I happily endorse Tuka as a promising young leader, who deserves an opportunity for growth and skills development — they have proven youth can and DO make a difference!",
    name: "Sydney Attwood",
    title: "Youth Engagement Coordinator at Volunteer Action Center Waterloo Region",
  },
  {
    quote:
      "Tuka has many strengths that she contributed to EPYC! She is very artistic, an attentive listener, and open to sharing. She got out of her comfort zone by contributing to the team presentation, and worked well as a teammember. She was also the top point-earner for the ‘in-between games’ activities!",
    name: "Silvia & Lucky",
    title: "EPYC Group Facilitators",
  },
  {
    quote:
      "She [Tuka] is always willing to participate in youth engagement opportunities with other community organizations and ensure the voice of young people are represented. She is always willing to help where needed and take on additional tasks. I’ve appreciated having Tuka on KYAC and look forward to continuing to work with her in the coming session!",
    name: "Dannon Vasey",
    title: "Youth Services Coordinator at City of Kitchener (KYAC)",
  },
  {
    quote:
      "Tuka represented Waterloo Region and CYPT at the session and provided valuable insights and ideas which will help shape the survey launch in communities across Waterloo Region. Tuka also supported UNICEF Canada and communities across Canada in brainstorming effective strategies to promote the survey, and shape messaging around the importance of youth participation. We appreciate Tuka’s support with this project!",
    name: "Joana Lincho",
    title: "Youth Engagement in Systems Lead at Carizon Family and Community Services and  CYPT",
  },
  {
    quote:
      "Tuka Alarbi participated in the Children and Youth Planning Table’s youTHINK event… to bring young people into the process of designing a survey that will aim to better understand the experiences of children and youth in Waterloo Region, and how to improve wellbeing.",
    name: "Monika Bodemer",
    title: "Program Assistant at Children and Youth Planning Table",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineering Fellow",
    desc: "Building 8+ AI apps and APIs using Next.js, OpenAI, Pinecone, StripeAPI in 5 weeks and a final project with a goal of attaining 1000 users acounts or on waitlist or $1000 in revenue",
    className: "md:col-span-2",
    thumbnail: "/images/exp1.svg",
  },
  // {
  //   id: 1,
  //   title: "Frontend Engineer Intern",
  //   desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp1.svg",
  // },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  {
    id: 2,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a webapp for a client, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/images/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/images/git.svg",
    link: "https://github.com/alartuka",
  },
  {
    id: 2,
    img: "/images/twit.svg",
    link: "https://x.com/",
  },
  {
    id: 3,
    img: "/images/link.svg",
    link: "https://linkedin.com/in/tukaalarbi",
  },
];
