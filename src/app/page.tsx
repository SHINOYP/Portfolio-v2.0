import Image from 'next/image';
import { client } from '../../tina/__generated__/client';



export default async function Home() {
  try {
    const postsResponse = await client.queries.projectsConnection();

    return (
      <section className="grid grid-cols-1 md:grid-cols-2   gap-4 mt-2  ">
        {postsResponse.data.projectsConnection?.edges?.map((project) => (
          <div key={project?.node?.id} className="pb-2 shadow-2xl my-4  rounded ">

            <div className='relative w-full h-40'>
              {project?.node?.projectImage && (
                <Image
                  src={project?.node?.projectImage}
                  alt={project?.node?.projectName}
                  className=" rounded"
                  fill
                  loading='eager'

                />
              )}
            </div>
            <h2 className="md:text-lg text-lg font-semibold  mt-2  text-left">{project?.node?.projectName}</h2>
            <p className='text-sm mt-2'>{project?.node?.projectDescription}</p>
          </div>
        ))}
      </section>
    );
  } catch (error) {
    console.log(error);
    return (
      <section className="p-4">
        <p className="text-red-500">Error loading projects</p>
      </section>
    );
  }
}