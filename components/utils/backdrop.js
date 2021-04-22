const Backdrop = (props) => (
    props.show ? <div className={` md:hidden fixed h-full w-full pt-16 z-10 left-0 right-0 bg-opacity-40 bg-black`} onClick={props.clicked}></div> : null
);

export default Backdrop;