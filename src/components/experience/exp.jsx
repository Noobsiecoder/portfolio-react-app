const adidasLogoLocation =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/302px-Adidas_Logo.svg.png";

const HMLogoLocation =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/220px-H%26M-Logo.svg.png";

const WorkDetails = (props) => {
  return (
    <div style={{ color: "#828282" }} className="font-mont-500 space-y-2 lg:space-y-6">
      <div className="md:space-y-1">
        <span className="text-xs lg:text-sm">{props.timeline}</span>
        <span
          style={{ color: "#333333" }}
          className="block font-mont-600 text-sm lg:text-base"
        >
          {props.workField}
        </span>
      </div>
      <span className="block text-sm lg:text-base">
        Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
        feugiat malesuada molestie.
      </span>
    </div>
  );
};

const CompanyLogo = (props) => {
  return (
    <a className="w-6/12" href={props.link} target="_blank" rel="noopener noreferrer">
      <img className="w-full" src={props.image} alt={props.imageInfo} />
    </a>
  );
};

const Experience = () => {
  return (
    <div className="bg-white p-6 space-y-12 md:space-y-6 lg:space-y-12 rounded-lg shadow-lg">
      <span
        style={{ color: "#4F4F4F" }}
        className="font-mont-500 text-lg lg:text-2xl"
      >
        Experiences
      </span>
      <div className="space-y-14 md:space-y-6 lg:space-y-14">
        <div className="space-y-4 md:-space-y-3 md:flex md:gap-10 md:items-start">
          <CompanyLogo
            link="https://adidas.com/"
            image={adidasLogoLocation}
            imageInfo="adidas"
          />
          <WorkDetails
            timeline="Feb 2017 - Current"
            workField="Front-end developer"
          />
        </div>
        <div className="space-y-4 md:space-y-0 md:flex md:gap-10 md:items-start">
          <CompanyLogo
            link="https://www.hm.com/"
            image={HMLogoLocation}
            imageInfo="HennesandMauritz AB"
          />
          <WorkDetails
            timeline="Aug 2016 - Feb 2018"
            workField="Full-stack developer"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
