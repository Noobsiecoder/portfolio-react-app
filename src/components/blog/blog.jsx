import Image from "./image";

const Blog = () => {
  return (
    <div className="bg-white p-4 md:pr-0 rounded-lg shadow-lg">
      <span className="font-mont-500 text-xs text-gray-300">Blog</span>
      <div className="mt-6 space-y-6 md:space-y-0 md:flex md:flex-row-reverse md:gap-12 md:items-start">
        <Image />
        <div
          style={{ color: "#333333" }}
          className="font-mont-500 text-lg lg:text-2xl"
        >
          How&nbsp;to <span className="md:block">organize&nbsp;your </span>CSS
        </div>
      </div>
      <div
        style={{ color: "#828282" }}
        className="mt-1 md:mt-12 md:w-10/12 text-sm md:text-base leading-5 space-y-4"
      >
        <span>
          In this article I tell the story about Proin eu justo sit amet lacus
          bibendum&nbsp;tincidunt. Vivamus&nbsp;non volutpat nisl, a
          luctus&nbsp;mi.
        </span>
        <span className="block">
          Donec aliquam est dui, vel vestibulum diam sollicitudin&nbsp;id.
          Quisque&nbsp;feugiat&nbsp;malesuada&nbsp;molestie.
        </span>
        <span className="block">
          Donec aliquam est dui, vel vestibulum diam sollicitudin&nbsp;id.
          Quisque&nbsp;feugiat&nbsp;malesuada&nbsp;molestie.
        </span>
      </div>
      <div style={{ color: "#828282" }} className="mt-16 space-x-3">
        <span>Source:</span>
        <a
          href="https://dev.to/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline italic"
        >
          dev.to
        </a>
      </div>
    </div>
  );
};

export default Blog;
