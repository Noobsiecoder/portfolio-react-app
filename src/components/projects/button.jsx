const Button = (props) => {
  return (
    <button className={`px-4 py-1 focus:outline-none font-mont-500 text-sm ${props.bgColor} ${props.textColor} border ${props.border} rounded-lg ${props.onHover}`}>
      {props.title}
    </button>
  );
};

export default Button;
