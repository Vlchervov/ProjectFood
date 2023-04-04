export const SelectOptions = [{ value: "Новокузнецк", label: "Новокузнецк" }];

export const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);
