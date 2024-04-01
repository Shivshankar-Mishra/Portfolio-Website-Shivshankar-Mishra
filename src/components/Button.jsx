const Button = (props) => {
  const type = props.type === "submit" ? "submit" : "button";
  return (
    <div className="flex flex-row justify-center items-center">
      <button
        type={type}
        className={`${props.wid} ${props.hgt} ${props.color} ${props.bgColor} ${props.border} ${props.hovers} font-semibold transition-all duration-300 `}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
