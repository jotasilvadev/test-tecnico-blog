import Head from 'next/head'
import { BlogPost } from "../components/blogpost";
import { FaGithub } from 'react-icons/fa';
import {Footer} from '@/components/footer';


export default function Home() {
  return (
      <>
          <Head>
              <title>Cat Blog</title>
              <meta name="description" content="Test Técnico Blog Alkabot" />
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
              />
              <meta name="author" content="João Paulo da Silva"></meta>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <header className="w-full bg-slate-700/90 h-24 top-0 fixed flex justify-around items-center backdrop-blur">
              <p className="text-5xl text-slate-400 cursor-pointer font-bold">
                  Cat Blog
              </p>
              <a
                  href="https://github.com/jotasilvadev/test-tecnico-blog"
                  target={"_blank"}
              >
                  <FaGithub className="text-4xl transition ease-in-out duration-700 text-slate-400 hover:text-orange-200" />
              </a>
          </header>
          <div className="container my-24 w-full mx-auto">
              <div className="grid">
                  <BlogPost />
              </div>
          </div>
          <Footer author={"João Paulo da Silva"} />
      </>
  );
}
