
export default function clubCard(props) {
    return (
        <button className=" m-2 relative text-center hover:bg-white ">
            <img className="w-full " src="clubCard.svg" />
            <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 font-bold lg:text-2xl " >{props.clubName}</div>
        </button>
    )
}