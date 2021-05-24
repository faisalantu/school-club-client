import { useEffect, useState, useRef } from "react";
import CheckBox from "./checkBox";
import useOnClickOutside from "use-onclickoutside";

export default function dropdownCheckBoxs({
  label = "",
  type,
  dropdownItems = {},
  editMode = false,
  changeState,
}) {
  const [selectData, setSelectData] = useState(["select"]);
  const [show, setShow] = useState(false);
  function handleCheckbox(name) {
    if (changeState) {
      changeState((prevState) => {
        if (type === "radiobutton") {
          const keys = Object.keys(prevState);
          const Items = { ...prevState };
          for (const key of keys) {
            Items[key] = false;
          }
          return {
            ...Items,
            [name]: !Items[name],
          };
        }
        return {
          ...prevState,
          [name]: !prevState[name],
        };
      });
    }
  }
  const check = useRef(null);
  useOnClickOutside(check, function () {
    setShow(false);
  });
  useEffect(() => {
    const data = [];
    Object.entries(dropdownItems).forEach(([key, value]) => {
      if (value === true) {
        data.push(key);
      }
    });
    if (data.length === 0) {
      setSelectData(["select"]);
    } else {
      setSelectData(data);
    }
  }, [dropdownItems]);
  // console.log("select",Object.entries(dropdownItems).map(([key, value ]) => { return(` ${(value) ?key+',':''} `)}))

  return (
    <div className="flex flex-col mb-1" ref={check}>
      <label className="mb-2 text-lg text-grey-darkest" htmlFor="label">
        {label}
      </label>
      <div className=" relative ">
        <div
          className="   cursor-pointer flex flex-col "
          onClick={() => {
            editMode && setShow(!show);
          }}
        >
          <select
            className={` rounded-lg border ${
              editMode ? "bg-gray-300" : "bg-gray-100 text-gray-300 "
            }  py-2 px-3 text-grey-darkest outline-none`}
          >
            <option>
              {selectData.map((str, index) => {
                return `${index !== 0 ? "," : ""} ${str} `;
              })}
            </option>
            {/* <option >{ Object.entries(dropdownItems).map(([key, value ]) => { return(` ${(value) ?key+',':''} `)}) }</option> */}
          </select>
          <div className="absolute left-0 right-0 top-0 bottom-0"></div>
        </div>
        <div
          className={`absolute z-20 w-full  flex flex-col rounded-lg py-2  bg-gray-300  border-2 ${
            show ? "block " : "hidden"
          }`}
        >
          {Object.entries(dropdownItems).map(([key, value]) => {
            return (
              <CheckBox
                key={key}
                lavel={key}
                defaultCheckValue={value}
                click={handleCheckbox}
                editMode={editMode}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
