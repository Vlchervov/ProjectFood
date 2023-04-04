export const SelectOptions = [
  { value: "Новокузнецк", label: "Новокузнецк" },
  { value: "Калтан", label: "Калтан" },
];

export const style = {
  dropdownIndicator: (provided) => ({
    ...provided,
    svg: {
      width: "30px",
      height: "20px",
      cursor: "pointer",
    },
  }),
};

export const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);
