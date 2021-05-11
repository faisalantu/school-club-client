import Link from "next/link";
export default function clubCard({ clubName, route }) {
  return (
    <Link href={route? route: '404'}>
      <a>
        <div className=' py-5 w-full bg-gray-200 hover:bg-gray-300 rounded text-center' >
          {clubName && clubName}
        </div>
      </a>
    </Link>
  );
}
