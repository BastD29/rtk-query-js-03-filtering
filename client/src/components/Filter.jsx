const Filter = ({ onInputChange, options }) => {
  return (
    <>
      <input
        name="name"
        placeholder="Filter by name"
        onChange={onInputChange}
      />

      <select name="age" id="age" onChange={onInputChange}>
        <option value="">Select age</option>
        {options?.ages?.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
      <select name="city" id="city" onChange={onInputChange}>
        <option value="">Select city</option>
        {options?.cities?.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </>
  );
};

export { Filter };
