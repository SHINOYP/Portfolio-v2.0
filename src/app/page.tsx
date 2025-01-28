import Image from 'next/image';
import { client } from '../../tina/__generated__/client';



export default async function Home() {
  try {
    const postsResponse = await client.queries.projectsConnection();

    return (
      <section className="grid grid-cols-1 md:grid-cols-2   gap-4 mt-2  ">
        {postsResponse.data.projectsConnection?.edges?.map((project) => (
          <div key={project?.node?.id} className="p-4 0 shadow-2xl  border-slate-700 border rounded ">
            {project?.node?.projectDescription && (
              <p className="mt-2">{project?.node?.projectLink}</p>
            )}
            <div className='relative w-full h-40'>
              {project?.node?.projectImage && (
                <Image
                  src={project?.node?.projectImage}
                  alt={project?.node?.projectName}
                  className=" rounded"
                  fill

                />
              )}
            </div>
            <h2 className="md:text-xl text-lg italic mt-2  text-center">{project?.node?.projectName}</h2>
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