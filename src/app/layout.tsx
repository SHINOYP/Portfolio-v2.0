import "./globals.css";
import Image from "next/image";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { client } from '../../tina/__generated__/client';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import ButtonTray from "../components/buttonTray";
import AnimatedFavicon from '@/components/AnimatedFavicon';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shinoy",
  description: "Software Engineer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await client.queries.user({ relativePath: "first.md" });

  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} md:max-w-6xl md:w-full md:mx-auto md:flex-row antialiased flex flex-col min-h-screen dark`}
      >
        <AnimatedFavicon />

        <section className=" shadow-indigo-500/40 bg-black flex md:flex-col md:justify-normal  border border-slate-700  justify-evenly shadow-2xl rounded-lg  md:w-[25%] md:h-[95vh]  max-w-[95vw] w-full md:max-w-5xl mt-10 md:mx-auto mx-auto  text-white p-8" >
          <div className="rounded-xl md:mx-auto  relative overflow-hidden md:h-40 h-32 w-32 md:w-40 bg-white">
            <Image
              src={data.user.profilePic}
              alt="profile picture of the author"

              fill

            />
          </div>
          <div className="md:w-full  md:mt-6">
            <h1 className="text-white md:text-center text-2xl font-bold">{data.user.name}</h1>
            <h2 className="text-white  md:text-center    ">Software Engineer</h2>
            <div className="flex md:justify-center md:gap-4 gap-3 md:mt-4 mt-2">
              <FaLinkedin className="text-white text-xl" />
              <FaGithub className="text-white text-xl" />
              <IoLogoWhatsapp className="text-white text-xl" />
            </div>
            <div>

            </div>
          </div>
        </section >
        <section className="border  bg-black border-slate-700 shadow-indigo-500/40 flex flex-col  shadow-2xl rounded-lg w-full md:w-[70%] md:h-[95vh] max-w-[95vw] md:max-w-5xl h-screen md:mt-10 mt-2 mx-auto text-white px-8 pb-8 pt-6">
          <ButtonTray />
          <div className="overflow-y-scroll no-scrollbar overflow-x-hidden">
            {children}
          </div>

        </section>


      </body>
    </html>
  );
}
