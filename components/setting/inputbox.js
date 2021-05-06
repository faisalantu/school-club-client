export default function InputBox({
  type,
  placeholder,
  name,
  ChangeHandel,
  value,
  editMode,
  label,
}) {

  return (
    <div className='flex flex-col mb-8'>
      {label ? (
        <label className='mb-2 text-lg text-grey-darkest' htmlFor={name && name}>
          {label && label}
        </label>
      ) : null}
      <input
        id= {name && name}
        className='rounded border-2 border-gray-300 bg-transparent py-2 px-3 text-grey-darkest outline-none'
        type={type && type}
        placeholder={placeholder && placeholder}
        name={name && name}
        onChange={ChangeHandel}
        value={value && value}
        disabled={editMode & editMode}
      />
    </div>
  );
}
