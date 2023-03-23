import { FaGithub } from "react-icons/fa";
import { Footer } from "../components/footer";
import { Writers } from "../components/writers";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <header className="w-full bg-slate-700 h-24 top-0 fixed flex justify-around items-center">
                <p className="text-5xl text-slate-400 cursor-pointer font-bold">
                    Cat Blog
                </p>

                <div className="flex gap-x-4">
                    <Link href="/">
                        <div className="text-4xl text-slate-400 hover:text-orange-200 ease-in duration-700">
                            <FaHome />
                        </div>
                    </Link>
                    <a href="https://github.com/jotasilvadev" target={"_blank"}>
                        <FaGithub className="text-4xl transition ease-in-out duration-700 text-slate-400 hover:text-orange-200" />
                    </a>
                </div>
            </header>
            <Writers />
            <Footer author={"João Paulo da Silva"} />
        </>
    );
}
