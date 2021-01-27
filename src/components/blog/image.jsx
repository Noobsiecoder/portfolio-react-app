const imageLocation =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

const Image = () => {
  return (
    <div>
      <img
        className="h-full dark:text-white rounded-lg md:rounded-r-none"
        src={imageLocation}
        alt="blog"
      />
    </div>
  );
};

export default Image;
