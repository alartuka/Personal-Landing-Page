import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import CC from "./CC";

const Footer = () => {
  
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
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

      <CC />
    </footer>
  );
};

export default Footer;
