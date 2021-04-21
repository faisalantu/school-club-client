function slideBar({ min, max, value, cbValue, step }) {
  return (
    <input
      step={step ? step : ""}
      className='block w-full'
      type='range'
      min={min ? min : "0"}
      max={max ? max : "100"}
      value={value ? value : 0}
      onChange={(e) => {
        e.preventDefault();
        if (cbValue) {
          cbValue(e.target.value);
        }
      }}
    />
  );
}

export default slideBar;
