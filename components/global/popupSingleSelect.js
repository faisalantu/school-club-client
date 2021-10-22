import React, { useState, useRef, useEffect } from "react";
import useOnClickOutside from "use-onclickoutside";
import { MdKeyboardArrowDown } from "react-icons/md";
function popupDropdown({ data, onChange, title }) {
  const [isClicked, setIsClicked] = useState(false);
  const modalBox = useRef(null);
  useOnClickOutside(modalBox, function () {
    setIsClicked(false);
  });

  const changeHandler = (e) => {
    let tempData = [...data];
    data.map((item, i) => {
      if (item.name === e.target.value) {
        tempData[i].isChecked = e.target.checked;
      } else {
        tempData[i].isChecked = false;
      }
    });
    onChange(tempData);
  };
  const showOptions = () => {
    return (
      <>
        <div
          onClick={(e) => {
            e.preventDefault();
            setIsClicked(false);
          }}
          className=' absolute left-0 right-0 top-0 bottom-0 bg-black opacity-25 z-40'
        ></div>
        <div className='absolute z-50 left-0 top-0 bottom-0 right-0 flex items-center justify-center'>
          <div ref={modalBox} className='bg-white w-96 p-5 rounded shadow-sm'>
            <div className='flex justify-between text-lg font-medium mb-4'>
              <p>Pleasae Choose an Option</p>
            </div>
            <div>
              {data?.map((item, i) => {
                return (
                  <label key={i} className='flex items-center'>
                    <input
                      type='radio'
                      name='single'
                      value={item.name && item.name}
                      onChange={changeHandler}
                      checked={item.isChecked && item.isChecked}
                      className='form-checkbox cursor-pointer'
                    />
                    <span className='ml-2'>{item.name}</span>
                  </label>
                );
              })}
              <div className='  flex flex-row justify-center mt-3'>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    setIsClicked(false);
                  }}
                  className='border rounded-lg border-yellow-400 cursor-pointer px-4 py-1'
                >
                  Done
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className='text-lg mb-2'>{title && title}</div>
      <div
        className=' cursor-pointer px-3 py-2 border-2 border-gray-300 rounded flex justify-between items-center'
        onClick={(e) => {
          e.preventDefault();
          setIsClicked(true);
        }}
      >
        <div>
          {data.map((item, i) => {
            if (item.isChecked) {
              return `${item.name}`;
            }
          })}
        </div>
        <span>
          <MdKeyboardArrowDown />
        </span>
      </div>

      {isClicked === true ? showOptions() : null}
    </div>
  );
}

export default popupDropdown;
