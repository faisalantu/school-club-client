import Link from "next/link";
const ShowAllBtn = ({ route }) => {
  return (
    <button className='border-yellow-600 border-2 rounded py-0.5 px-2 cursor-pointer hover:bg-gray-200'>
      <Link href={route ? route : "404"}>
        <a>Show All</a>
      </Link>
    </button>
  );
};

export default ShowAllBtn;
