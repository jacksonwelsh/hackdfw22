import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";

const Simulator: NextPage = () => {
    return (
        
        <main className="flex-col">
            <div className="text-center pb-10">
                <h1>Hey bucko, life sim 'boutta be bussin frfr on God SSSSHHHEEEEEEESSSSHHHH</h1>
            </div>
            <Link href={"/"}>
                <a className="pl-10 text-8xl" href="/">&larr;</a>
            </Link>
            <div className="grid grid-cols-2 gap-4 my-4 px-10">
                <Card>
                    <h2>Buy a Car.</h2>
                </Card>
                <Card>
                    <h2>Deposit into 401k.</h2>
                </Card>
                <Card>
                    <h2>Pay Credit Card debt.</h2>
                </Card>
                <Card>
                    <h2>Hire an Escort. (sus)</h2>
                </Card>
            </div>
        </main>
    );
};

export default Simulator