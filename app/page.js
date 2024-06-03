import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-5">
              Hello I'm <br />
              <span className="text-bhagwa">Harsh Bhargava</span>
            </h1>
            <p className="max-w-[600px] text-justify mb-9 text-white/80">
              I am a passionate and creative Frontend Developer with a strong
              foundation in modern web technologies and a keen eye for design.
              My mission is to create visually appealing and highly functional
              web applications that provide an excellent user experience.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 hover:bg-bhagwa hover:text-white/80"
              >
                <span>Download Resume </span>{" "}
                <FiDownload className="text-xl " />
              </Button>
              <div>
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-10 h-10 border border-bhagwa rounded-full flex justify-center items-center text-bhagwa text-base hover:bg-bhagwa hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
