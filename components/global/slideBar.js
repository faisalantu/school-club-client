import { useState } from "react";

function slideBar() {
  const [slideBar, setSlideBar] = useState(0);
  const onChangeHandle = (e) => {
    e.preventDefault();
    setSlideBar(e.target.value);
  };
  return (
    <div>
      <input
        className='block w-full'
        type='range'
        min='0'
        max='100'
        value={slideBar}
        onChange={onChangeHandle}
      />
    </div>
  );
}

export default slideBar;