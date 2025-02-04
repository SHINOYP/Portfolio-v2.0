import "./globals.css";
import Image from "next/image";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { client } from '../../tina/__generated__/client';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import ButtonTray from "../components/buttonTray";
import AnimatedFavicon from '@/components/AnimatedFavicon';

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], // Include different weights if needed
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
        className={`${roboto.variable} md:max-w-6xl md:w-full md:mx-auto md:flex-row bg-black md:bg-black antialiased flex flex-col min-h-screen `}
      >
        <AnimatedFavicon />

        <section className="bg-black shadow-indigo-500/40 flex md:flex-col md:justify-normal sm:justify-evenly md:border border-slate-500 md:shadow-2xl rounded-2xl md:w-fit md:min-w-[25%] md:h-[95vh] max-w-[95vw] w-full md:max-w-5xl md:mt-10 mt-4 md:mx-auto mx-auto text-white p-8">
          <div className="w-1/2 md:w-full">
            <div className="rounded-xl md:mx-auto relative overflow-hidden md:h-40 h-32 w-32 md:w-40 bg-white">
              <Image
                src={data.user.profilePic}
                alt="profile picture of the author"
                fill
              />
            </div>
          </div>
          <div className="md:w-full w-1/2 md:mt-6">
            <h1 className="text-white md:text-center text-2xl font-bold">{data.user.name}</h1>
            <h2 className="text-white md:text-center">Software Engineer</h2>
            <div className="flex md:justify-center md:gap-4 gap-3 md:mt-4 mt-2">
              <FaLinkedin className="text-white text-xl" />
              <FaGithub className="text-white text-xl" />
              <IoLogoWhatsapp className="text-white text-xl" />
            </div>
          </div>
        </section>

        <section className="md:border bg-black border-slate-500 flex flex-col rounded-2xl w-full md:w-[70%] md:h-[95vh] max-w-[95vw] md:max-w-5xl h-screen md:mt-10 mt-0 mx-auto text-white md:px-10 px-4 pb-8 pt-8">
          <ButtonTray />
          <div className="overflow-y-scroll no-scrollbar mt-4 overflow-x-hidden mb-100">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
