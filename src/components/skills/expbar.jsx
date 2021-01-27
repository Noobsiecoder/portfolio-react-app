const frontEndTech = {
  React: "50%",
  JavaScript: "85%",
  CSS: "75%",
  Sass: "45%",
  "Tailwind CSS": "70%",
  "Bootstrap CSS": "50%",
};

const ExpBar = () => {
  return (
    <div
      style={{ color: "#4F4F4F" }}
      className="flex flex-col space-y-2 justify-between"
    >
      {Object.entries(frontEndTech).map(([key, value]) => (
        <div className="grid grid-cols-2 gap-4 items-center">
          <span
            style={{ color: "#4F4F4F" }}
            key={key}
            className="font-mont-500 font-text-xxs md:text-xs lg:text-sm"
          >
            {key}
          </span>
          <div className="h-2 rounded-lg bg-gray-200">
            <div
              key={value}
              style={{ maxWidth: value }}
              className="h-2 rounded-lg bg-blue-500 custom-animation"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpBar;
