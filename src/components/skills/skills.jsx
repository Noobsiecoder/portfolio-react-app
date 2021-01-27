import ExpBar from "./expbar";

const Skills = () => {
  return (
    <div className="bg-white space-y-6 p-4 rounded-lg shadow-lg">
      <span
        style={{ color: "#4F4F4F" }}
        className="font-mont-700 text-sm md:text-base lg:text-lg uppercase"
      >
        Front end
      </span>
      <ExpBar />
    </div>
  );
};

export default Skills;
