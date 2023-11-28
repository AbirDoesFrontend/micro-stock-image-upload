const Button = ({ type, title, icon, variant, full }) => {
  return (
    <button
      className={`flexCenter gap-1 rounded-full border ${variant} ${full && "w-full"}`}
      type={type}
    >
      {icon && <span>{icon}</span>}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
