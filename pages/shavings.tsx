import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";

const Shavings: NextPage = () => {
    return (
        
        <main className="flex-col">
            <div className="text-center pb-10">
                <h1>FINES BITCH</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 my-4 px-10">
                <Card>
                    <h2></h2>
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
}

export default Shavings;