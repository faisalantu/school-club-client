export default function CheckBox(props) {
    return (<div className='class cursor-pointer flex items-center' onClick={()=>{if(props.editMode){ props.click( props.lavel)}}}>
        {
            props.defaultCheckValue ? <svg className="mx-3.5" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="14" height="14" rx="4.5" fill="#BFC228" stroke="#646464" />
                        </svg>

                    : <svg className="mx-3.5" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="14" height="14" rx="4.5" fill="#C4C4C4" stroke="#646464" />
                    </svg>

        }
        <span className=""  >{props.lavel}</span>
    </div>);
}
