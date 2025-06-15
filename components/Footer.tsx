import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Footer = () => {
  
  return (
    <footer className="w-full pt-16 pb-6" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/images/footer-grid.svg"
          alt="Tuka Alsharief | Tuka Alarbi"
          className="w-full h-full opacity-50 "
          width={200}
          height={200}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to elevate <span className="text-purple">your</span>
          software solutions to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Connect with me today to explore how we can innovate together and
          achieve impactful results
        </p>

        <Link href="/ContactForm">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>

      </div>

      <div className="flex mt-10 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
        Copyright &copy; 2024 Tuka Alsharief 
        
{/*         <span className="text-purple">• </span> Inspired by{" "}
        
        <Link href="https://github.com/adrianhajdin" target="_blank" rel="noopener noreferrer" color="inherit">Adrian Hajdin</Link> */}
      </p>
      

      <div className="flex items-center md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <Link
            key={`link=${info.id}`}
            href={info.link}
            className={cn(
              "w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            )}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <Image
                src={info.img}
                alt="Tuka Alsharief | Tuka Alarbi"
                width={20}
                height={20}
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
      
    </footer>
  );
};

export default Footer;
