export default function toggleButton({ value, setValue, forId }) {
  return (
    <div className='inline-block'>
      <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
        <input
          onClick={() => {
            setValue(!value);
          }}
          type='checkbox'
          name='toggle'
          id={forId && forId}
          className={` ${
            value ? "right-0 border-green-400" : "left-0 border-gray-300"
          } absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer `}
        />
        <label
          htmlFor={forId && forId}
          className={` ${
            value ? "bg-green-400" : "bg-gray-300"
          } block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer`}
        ></label>
      </div>
    </div>
  );
}
