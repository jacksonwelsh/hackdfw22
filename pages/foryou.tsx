import type { NextPage } from "next";
import Link from "next/link";
import FadeInWhenVisible from "../components/Animations/FadeInWhenVisible";

const ForYou: NextPage = () => {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 sm:py-12">
        <h1 className="text-6xl font-bold">Personalized content at a glance</h1>
            <p className="text-6xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum.
            </p>
            <p className="text-6xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum.
            </p>
            <p className="text-6xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum.
            </p>
            <FadeInWhenVisible>
              <h1>Hello World</h1>
            </FadeInWhenVisible>
            <FadeInWhenVisible direction="right">
              <h1>Hello World</h1>
            </FadeInWhenVisible>
      </div>
  );
}

export default ForYou;