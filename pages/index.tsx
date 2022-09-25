import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-4 px-2">
        <h1 className="font-bold text-6xl">
          Welcome to{" "}
          <a
            href="/"
            className="text-transparent bg-gradient-to-tr from-blue-500 to-purple-500 bg-clip-text"
          >
            FineLine!
          </a>
        </h1>

        <p className="">when the ___ is ___</p>

        <div className="grid grid-cols-2 gap-4 my-4">
          <Link href={"/timeline"}>
            <a>
            <Card>
              <h2>Timeline &rarr;</h2>
              <p>View your personalized financial Timeline!</p>
              </Card>
            </a>
          </Link>

          <a href="https://nextjs.org/learn" className="">
            <Card>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </Card>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className=""
          >
            <Card>
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </Card>
          </a>
          
          <Link href={"/simulator"}>
            <a>
              <Card>
                <h2>Financial Simulator &rarr;</h2>
                <p>
                  Try our fun financial life simulator if you dare! &rarr;
                </p>
            </Card></a>
          </Link>            
        </div>
      </main>
    </div>
  );
};

export default Home;
