
function MultiSelect() {
  return (
    <select id="multi-value-select" multiple={true}>
      <option defaultValue={"ss"}>orange</option>
      <option>white</option>
      <option selected="selected">purple</option>
    </select>
  );
}

export default MultiSelect;
