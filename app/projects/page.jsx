import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Dining room for family time",
    description:
      "Bedroom with a clean and comfortable design for your family. charming with a modern design",
    image: "/image/project3.jpg",
    link: "",
  },
  {
    id: 2,
    name: "Kitchen look modern and clean",
    description:
      "Bedroom with a clean and comfortable design for your family. charming with a modern design",
    image: "/image/project2.jpg",
    link: "",
  },
  {
    id: 3,
    name: "Perfect living room for family time",
    description:
      "Bedroom with a clean and comfortable design for your family. charming with a modern design",
    image: "/image/project4.png",
    link: "",
  },
];

const page = () => {
  return (
    <div>
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
        <h1 className="container mx-auto py-64 text-4xl md:text-6xl text-center md:text-left font-semibold tracking-widest text-white pl-[4%]">
          Our Projects
        </h1>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 py-8 px-5 lg:px-[5%]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
          >
            <div>
              <Image
                src={project.image}
                width={480}
                height={380}
                alt=""
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full to-black group-hover:translate-y-0 rounded">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p className="py-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
