export default function About() {
  return (
    <section  className = "h-screen"id="about">
      <div className="contanier mx-auto px-10 h-full py-20 flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl text-white font-medium mb-4">
            Hi , I am Aunbhav.
            <br className="hidden lg:inline-block" />
            <p className="text-2xl text-green-400 ">
              Front-End Developer | ReactJs Developer
            </p>
          </h1>
          <p className="mb-10 mt-8 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur praesentium in aliquid sed repellat saepe nostrum
            nesciunt modi aliquam officia! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugiat dolorum perspiciatis dolorem
            aliquam nisi ullam magnam repellendus quidem assumenda eveniet!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            iure in architecto quod. Quis, recusandae et nulla quam esse fugiat.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work with me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Projects
            </a>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
