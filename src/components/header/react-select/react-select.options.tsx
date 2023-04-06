export const SelectOptions = [
  { value: "Новокузнецк", label: "Новокузнецк" },
  { value: "Калтан", label: "Калтан" },
];

export const style = {
  dropdownIndicator: (provided: any) => ({
    ...provided,
    svg: {
      width: "30px",
      height: "20px",
      cursor: "pointer",
    },
  }),
};

export const Checkbox = ({
  children,
  ...props
}: JSX.IntrinsicElements["input"]) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);
