const CheckBox = ({
  id = "id" + Math.round(Math.random() * 10000),
  name = "",
  value = "",
  children,
  onChange,
  onClick,
  disabled,
  checked,
}) => {
  return (
    <>
      <input
        id={id}
        type="checkbox"
        value={value}
        name={name}
        disabled={disabled}
        onChange={onChange}
        onClick={onClick}
        checked={checked}
      />
      <label htmlFor={id}>{children}</label>
    </>
  );
};

export default CheckBox;
