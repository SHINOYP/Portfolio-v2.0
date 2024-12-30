import Image from "next/image";
import { client } from '../../tina/__generated__/client';
export default async function Home() {
  const { data } = await client.queries.user({ relativePath: "first.md" });
  return (
    <div className="flex flex-col md:max-w-6xl md:w-full md:mx-auto md:flex-row gap-2" >
      <section className="bg-gray-800 rounded-md w-full md:w-[25%] max-w-5xl mt-10 mx-auto text-white p-8" >
        <div className="rounded-full md:mx-auto border-black  relative overflow-hidden h-40 w-40 bg-white">
          <Image
            src={data.user.profilePic}
            alt="profile picture of the author"

            fill

          />
        </div>
        <h1 className="text-white md:w-full md:text-center md:mt-6 text-2xl font-bold">{data.user.name}</h1>
      </section >
      <section className="bg-gray-800 rounded-md w-full md:w-[70%] max-w-5xl h-screen mt-10 mx-auto text-white p-8">

      </section>
    </div>
  );
}
