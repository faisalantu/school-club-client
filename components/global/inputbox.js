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
      <label className='mb-2 text-lg text-grey-darkest'>{label && label}</label>
      <input
        className='rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
        type={type && type}
        placeholder={placeholder && placeholder}
        name={name && name}
        onChange={ChangeHandel && ChangeHandel}
        value={value && value}
        disabled={editMode & editMode}
      />
    </div>
  );
}
