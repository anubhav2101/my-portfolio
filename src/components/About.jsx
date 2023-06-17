import AboutImg from "../assets/about.png";
import Typewriter from "typewriter-effect";
import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function About() {
  return (
    <section
      className="h-screen  bg-gradient-to-r from-gray-900 to-gray-700"
      id="about"
    >
      <div className="contanier mx-auto px-10  py-20 flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl text-white font-medium mb-4">
            Hi <span> 👋🏻</span> , I&apos;m Aunbhav
            <br className="hidden lg:inline-block" />
            <p className="text-2xl text-green-400 mt-1">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Front-end developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("MERN stack")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("React developer")
                  .start()
                  
              }}
            />
            </p>
          </h1>
          <h2 className="text-2xl text-white italic">Who I am</h2>
          <p className="my-4 leading-relaxed">
            My name is Anubhav verma and I am Front-end developer based in
            kanpur,UP,India Proficient in building robust web applications.
            <br />
            <br />
            My field of intrest are creating seamless user experiances,
            designing efficient APIs and leveraging the power of the{" "}
            <span className="text-green-400 mr-1 italic">MERN stack</span>
            to deliver high-quality, scalable solutions.
          </p>
          <div className="flex justify-center mt-2">
            <a
              href="https://drive.google.com/file/d/18kTX7f9mAKyuX0qTSnnubkaMbehmtM7f/view"
              target="_target"
              className="inline-flex text-white  bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Projects
            </a>
          </div>
          <div className="flex justify-between mt-10 w-[250px] text-green-400 ">
            <a href="https://github.com/anubhav2101" target="_taget">
              <AiFillGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/anubhavverma21/"
              target="_taget"
            >
              <AiOutlineLinkedin size={30} />
            </a>
            <a href="https://twitter.com/IAnubhav00" target="_taget">
              <AiOutlineTwitter size={30} />
            </a>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            src={AboutImg}
            alt="cover-img"
            className="object-cover object-center rounded h-[429px]"
          />
        </div>
      </div>
    </section>
  );
}
