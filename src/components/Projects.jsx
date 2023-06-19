import { projects } from "../data";
import { GoLinkExternal } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";

export default function Projects() {
  return (
    <section id="projects" className="h-screen">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-20">
          {/* <BsCodeSlash size={40} className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font  mt-8 text-white">
            Apps I&apos;ve Built
          </h1>
        </div>
        <div className="flex flex-wrap m-1">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-1"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />

                <div className="px-6 py-8 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3 flex flex-row justify-center">
                    {project.title}
                    <a href={project.link} target="_target">
                      <GoLinkExternal
                        className="text-green-400 p-1 "
                        size={30}
                      />
                    </a>
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <a href={project.code} className= "flex justify-center text-green-400">
                    <AiFillGithub size={25}/>
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
