import { useState } from "react";
import CheckBox from './checkBox';

export default function dropdownCheckBoxs({ dropdownItems, checkboxClickHandler, editMode }) {

    const [show, setShow] = useState(false);

    return (<div className='flex flex-col mb-8' >
        <div >
            <div className=' relative  cursor-pointer flex flex-col ' onClick={() => { setShow(!show) }}>
                <select className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest outline-none' >
                    <option>Select options</option>
                </select>
                <div className="absolute left-0 right-0 top-0 bottom-0"></div>
            </div>
            <div className={` flex flex-col rounded-lg py-2  bg-gray-300  border-2 ${show ?'block ' :'hidden'  }`} >
                {
                    Object.entries(dropdownItems).map(([key, value]) => {
                        return (
                            <CheckBox key={key} lavel={key} defaultCheckValue={value} click={checkboxClickHandler} editMode={editMode} />
                        )
                    })

                }



            </div>

        </div>
    </div>);
}