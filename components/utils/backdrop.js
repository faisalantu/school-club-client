const Backdrop = (props) => (
    props.show ? <div className={` fixed h-full w-full pt-16 ${ props.zIndex } left-0 right-0 bg-opacity-40 bg-black`} onClick={props.clicked}></div> : null
);

export default Backdrop;