import { skills } from "../data";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Skills() {
  return (
    <section id="skills" className="h-screen">
      <div className="container px-5 py-10 mx-auto">

        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mt-8 text-white mb-1">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <AiOutlineCheckCircle className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
