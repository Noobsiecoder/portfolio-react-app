import Card from "./card";
import Button from "./button";

const firstProject = {
  imageLocation:
    "https://firebasestorage.googleapis.com/v0/b/devchallenges-1234.appspot.com/o/challengesDesigns%2FEdieHomageThumbnail.png?alt=media&token=72c573b5-6389-425c-b947-de63f0f5b2ef",
  demoLink: "https://noobsiecoder.github.io/edie-homepage/",
  codeLink: "https://github.com/Noobsiecoder/edie-homepage",
};

const secondProject = {
  imageLocation:
    "https://firebasestorage.googleapis.com/v0/b/devchallenges-1234.appspot.com/o/challengesDesigns%2FrecipeBlogThumbnail.png?alt=media&token=2d696d3c-a8cb-4c7c-907b-561ae1144cc9",
  demoLink: "https://noobsiecoder.github.io/recipe-blog-page/",
  codeLink: "https://github.com/Noobsiecoder/recipe-blog-page/",
};

const thirdProject = {
  imageLocation:
    "https://firebasestorage.googleapis.com/v0/b/devchallenges-1234.appspot.com/o/challengesDesigns%2FCheckoutThumbnail.png?alt=media&token=c7ffdbe3-7206-44f2-b1e6-a6b99bf81901",
  demoLink: "https://noobsiecoder.github.io/checkout-page/",
  codeLink: "https://github.com/Noobsiecoder/checkout-page/",
};

const Projects = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white space-y-6 p-4 rounded-lg shadow-lg">
        <span
          style={{ color: "#4F4F4F" }}
          className="font-mont-500 text-sm md:text-lg"
        >
          Projects
        </span>
        <div className="space-x-4">
          <Button
            title="React"
            bgColor="bg-white"
            textColor="text-gray-700"
            border="border-gray-700"
            onHover="hover:bg-blue-500 
          hover:border-blue-500 hover:text-white"
          />
          <Button
            title="Vue"
            bgColor="bg-white"
            textColor="text-gray-700"
            border="border-gray-700"
            onHover="hover:bg-blue-500 
          hover:border-blue-500 hover:text-white"
          />
          <Button
            title="Responsive"
            bgColor="bg-blue-500"
            textColor="text-white"
            border="border-blue-500"
            onHover="hover:bg-white hover:text-blue-500 hover:border-blue-500"
          />
        </div>
      </div>
      <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
        <Card
          location={firstProject["imageLocation"]}
          imageInfo="edie-homepage"
          title="Edie Homepage"
          demoLink={firstProject["demoLink"]}
          codeLink={firstProject["codeLink"]}
        />
        <Card
          location={secondProject["imageLocation"]}
          imageInfo="recipe-blog-page"
          title="Recipe Blog"
          demoLink={secondProject["demoLink"]}
          codeLink={secondProject["codeLink"]}
        />
        <Card
          location={thirdProject["imageLocation"]}
          imageInfo="checkout-page"
          title="Checkout Page"
          demoLink={thirdProject["demoLink"]}
          codeLink={thirdProject["codeLink"]}
        />
      </div>
    </div>
  );
};

export default Projects;
