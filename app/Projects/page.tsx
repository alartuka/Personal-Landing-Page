"use client";

// import Footer from '@/components/Footer';
import MagicButton from "@/components/MagicButton";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { Typography } from "@mui/material";
import CC from "@/components/CC";

function page() {
	return (
		<section id="projects_display">
			<ShootingStars />
			<StarsBackground />
			<div className="py-10 px-14">
				<div
					className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10"
					style={{ gridAutoFlow: "dense" }}>
					{projects.map((item) => (
						<div key={item.id} className="grid gap-4">
							<CardContainer className="inter-var w-full h-full">
								<CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-4 border flex flex-col h-full">
									<CardItem
										translateZ="50"
										className="text-xl font-bold text-neutral-600 dark:text-white">
										{item.title}
									</CardItem>

									<CardItem
										as="p"
										translateZ="60"
										className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
										{item.des}
									</CardItem>

									{/* Image Placeholder */}
									<div className="w-full h-48 mt-4 p-4 overflow-hidden rounded-xl">
										{item.img ? (
											<Image
												src={item.img}
												alt="Project image"
												layout="fill"
												objectFit="cover"
												className="w-full h-full"
											/>
										) : (
											<Image
												src="/images/bg.png"
												alt="Default background"
												layout="fill"
												objectFit="cover"
												className="w-full h-full"
											/>
										)}
									</div>

									<div className="flex justify-between items-center p-4 mt-auto">
										{/* <CardItem
											translateZ={20}
											as={Link}
											href={item.link}
											target="__blank"
											className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
											<div className="flex items-center">
												{item.iconLists.map((icon, index) => (
													<div
														key={index}
														className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
														style={{
															transform: `translateX(-${5 * index + 2}px)`,
														}}>
														<Image
															src={icon}
															alt="Icon"
															className="p-2"
															width={50}
															height={50}
														/>
													</div>
												))}
											</div>
										</CardItem> */}

										<CardItem
											translateZ={20}
											as={Link}
											href={item.source}
											className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
											<Typography variant="body2">
												Source{" "}
												<FaLocationArrow className="ms-3" color="#CBACF9" />
											</Typography>
										</CardItem>

										<CardItem
											translateZ={20}
											as={Link}
											href={item.link}
											className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
											Live
											<FaLocationArrow className="ms-3" color="#CBACF9" />
										</CardItem>
									</div>
								</CardBody>
							</CardContainer>
						</div>
					))}
				</div>
				
				<CC />
			</div>
			
		</section>
	);
}

export default page;
