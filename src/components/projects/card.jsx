const Button = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-4 py-1 font-mont-500 cursor-pointer text-base lg:text-lg text-center ${props.bgColor} ${props.textColor} border ${props.border} rounded-lg ${props.onHover}`}
    >
      {props.title}
    </a>
  );
};

const Card = (props) => {
  return (
    <div className="bg-white p-4 space-y-6 rounded-lg shadow-lg">
      <div>
        <img className="text-xs" src={props.location} alt={props.imageInfo} />
      </div>
      <div className="space-y-4">
        <div
          style={{ color: "#4F4F4F" }}
          className="font-mont-500 flex gap-3 text-xs lg:text-sm"
        >
          <span>#HTML</span>
          <span>#CSS</span>
          <span>#Responsive</span>
        </div>
        <div
          style={{ color: "#333333" }}
          className="font-mont-500 text-lg lg:text-2xl"
        >
          {props.title}
        </div>
        <div
          style={{ color: "#828282" }}
          className="font-mont-500 text-xs lg:text-sm"
        >
          In this project, I work with HTML and CSS to create a responsive page.
          This page is similiar with a page. The design is from devchallenge.io
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Button
            link={props.demoLink}
            title="Demo"
            bgColor="bg-blue-500"
            textColor="text-white"
            border="border-blue-500"
            onHover="hover:bg-white hover:text-blue-500"
          />
          <Button
            link={props.codeLink}
            title="Code"
            bgColor="bg-white"
            textColor="text-blue-500"
            border="border-blue-500"
            onHover="hover:bg-blue-500 hover:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
