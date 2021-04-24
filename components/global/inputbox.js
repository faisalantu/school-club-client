export default function InputBox({
  type,
  placeholder,
  name,
  ChangeHandel,
  value,
  editMode,
  label,
}) {
  const dataChangeHandle = (e) => {
    e.preventDefault();
    if (type === "text" && ChangeHandel) {
      ChangeHandel(e.target.value);
    } else if (type === "time" && ChangeHandel) {
      ChangeHandel(e.target.value);
    } else if (type === "date" && ChangeHandel) {
      ChangeHandel(e.target.value);
    } else if (type === "number" && ChangeHandel) {
      ChangeHandel(e.target.value);
    }
  };
  return (
    <div className='flex flex-col mb-8'>
      {label ? (
        <label className='mb-2 text-lg text-grey-darkest'>
          {label && label}
        </label>
      ) : null}
      <input
        className='rounded border-2 border-gray-300 bg-transparent py-2 px-3 text-grey-darkest outline-none'
        type={type && type}
        placeholder={placeholder && placeholder}
        name={name && name}
        onChange={dataChangeHandle}
        value={value && value}
        disabled={editMode & editMode}
      />
    </div>
  );
}
