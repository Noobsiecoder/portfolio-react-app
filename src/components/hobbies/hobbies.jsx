const gamingImageLocation =
  "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

const cookingImageLocation =
  "https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

const bikingImageLocation =
  "https://images.unsplash.com/photo-1508789454646-bef72439f197?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmlraW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const HobbiesTemplate = (props) => {
  return (
    <div className="space-y-4">
      <div>
        <img
          className="rounded-lg text-font-xxs"
          src={props.image}
          alt={props.imageInfo}
        />
      </div>
      <div>
        <span
          style={{ color: "#333333" }}
          className="font-mont-600 text-sm md:text-lg"
        >
          {props.title}
        </span>
        <span
          style={{ color: "#828282" }}
          className="block font-mont-500 text-font-xxs md:text-sm"
        >
          Quisque feugiat malesuada molestie.
        </span>
      </div>
    </div>
  );
};

const Hobbies = () => {
  return (
    <div className="bg-white space-y-6 p-4 rounded-lg shadow-lg">
      <span
        style={{ color: "#4F4F4F" }}
        className="font-mont-500 text-lg md:text-2xl"
      >
        Hobbies
      </span>
      <div className="space-y-5">
        <HobbiesTemplate
          image={gamingImageLocation}
          imageInfo="gaming"
          title="Gaming"
        />
        <HobbiesTemplate
          image={cookingImageLocation}
          imageInfo="caming"
          title="Cooking"
        />
        <HobbiesTemplate
          image={bikingImageLocation}
          imageInfo="bikng"
          title="Biking"
        />
      </div>
    </div>
  );
};

export default Hobbies;
