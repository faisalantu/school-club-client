import { useState } from "react";
function commentForm() {
  const [submitBtnLogic, setSubmitBtnLogic] = useState(false);
  return (
    <>
      <form
        onClick={function () {
          setSubmitBtnLogic(true);
        }}
        action='#'
      >
        <textarea
          name='roleExplanation'
          className='w-full rounded-md p-3 mt-2 border focus:outline-none border-gray-300 focus:border-gray-500'
          rows='3'
        ></textarea>
        <div className={`${submitBtnLogic ? "" : "hidden"}`}>
          <button className='hover:bg-gray-200 focus:outline-none px-3 py-1 rounded border-2 border-gray-400 focus:border-yellow-500'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default commentForm;
