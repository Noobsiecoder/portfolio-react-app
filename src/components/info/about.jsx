import Image from "./image";
import Details from "./details";

const AboutMe = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg space-y-5 md:space-y-0 md:flex md:gap-6">
      <Image />
      <Details />
    </div>
  );
};

export default AboutMe;
