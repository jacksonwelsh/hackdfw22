import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../components/Animations/FadeInWhenVisible";
import FadeInFromTop from "../components/Animations/FadeInFromTop";

const ForYou: NextPage = () => {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 sm:py-12">
        <FadeInFromTop>
        <h1 className="text-lg font-bold">Personalized content at a glance</h1>
        </FadeInFromTop>

            <p className="text-2m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-2m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-2m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <FadeInWhenVisible direction="left">
              <h1>Hello World</h1>
            </FadeInWhenVisible>
            <FadeInWhenVisible direction="right">
              <h1>Hello World</h1>
            </FadeInWhenVisible>
      </div>
  );
}

export default ForYou;