import { socialMedia } from '@/data';
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import { cn } from '@/lib/utils';

function CC() {
  const copyrightSection = (
    <div className="flex md:flex-row flex-col justify-between items-center pr-10 pl-10 pt-10 pb-3">
      
      <div className="md:text-base text-sm md:font-normal font-light">
        Copyright &copy; 2024 Tuka Alsharief | Tuka Alarbi{" "}
        
        <span className="text-purple">• </span> Inspired by{" "}
        
        <Link href="https://github.com/adrianhajdin" target="_blank" rel="noopener noreferrer" color="inherit">Adrian Hajdin</Link>
      </div>
      

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
  );

  return <section className="w-full pt-20 pb-10">{copyrightSection}</section>;
}

export default CC;
