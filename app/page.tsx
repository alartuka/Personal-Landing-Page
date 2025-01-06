"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { StarsBackground } from "@/components/ui/stars-background";
import ShootingStars from "@/components/ui/shooting-stars";


const Home = () => {
  return (
		<main className="relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 antialiased">
			<ShootingStars />
			<StarsBackground />
			<div className="max-w-7xl w-full">
				{/* <FloatingNav navItems={navItems} /> */}
				<Hero />
				<Grid />
				<RecentProjects />
				<Experience />
				<Clients />
				{/* <Approach /> */}
				<Footer />
			</div>
		</main>
	);
};

export default Home;
