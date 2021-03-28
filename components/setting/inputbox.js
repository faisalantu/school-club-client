export default function InputBox(props) {
    return (<div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4'>
                <label className='mb-2 text-lg text-grey-darkest' >{props.label}</label>
                <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.ChangeHandel} value={props.value} disabled={!props.editMode && "disabled"} />
            </div>);
}