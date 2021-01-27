const Heading = () => {
  return (
    <div
      style={{ color: "#4F4F4F" }}
      className="font-mont-600 text-lg lg:text-2xl"
    >
      Billy Pearson
    </div>
  );
};

const WorkField = () => {
  return (
    <div
      style={{ color: "#828282" }}
      className="font-mont-500 text-sm lg:text-base"
    >
      Front-end developer
    </div>
  );
};
const Info = () => {
  return (
    <div
      style={{ color: "#828282" }}
      className="md:w-10/12 font-mont-500 space-y-4 text-xs leading-5 lg:text-sm xl:text-base"
    >
      <span>
        Self-motivated developer, who is willing to learn and create outstanding
        UI applications.
      </span>
      <span className="block">
        Donec aliquam est dui, vel vestibulum diam sollicitudin&nbsp;id. Quisque&nbsp;feugiat malesuada molestie.
      </span>
    </div>
  );
};

const Contact = (props) => {
  return (
    <div className="flex items-center space-x-3 leading-5 text-sm xl:text-base text-blue-500">
      <span class="material-icons text-sm leading-5 xl:text-base">{props.icon}</span>
      <a href={`${props.anchorLink}`}>{props.contact}</a>
    </div>
  );
};

const Details = () => {
  return (
    <div className="flex flex-col space-y-6 xl:space-y-12 md:-mt-1">
      <div>
        <Heading />
        <WorkField />
      </div>
      <Info />
      <div className="space-y-2">
          <Contact icon="email" anchorLink="mailto:noobsiecoder@gmail.com" contact="Contact via email" />
          <Contact icon="phone" anchorLink="tel:(+603)546624342" contact="Contact via phone call" />
      </div>
    </div>
  );
};

export default Details;
