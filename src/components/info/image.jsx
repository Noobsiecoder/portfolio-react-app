const imageLocation =
  "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80";

const Image = () => {
  return (
    <div>
      <img className="h-full rounded-lg" src={imageLocation} alt="NoobsieCoder" />
    </div>
  );
};

export default Image;
