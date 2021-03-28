import Link from "next/link";

function subSidebarLink({ icon, name, route }) {
  return (
    <div>
      <Link href={route ? route : "#"}>
        <a className='flex items-center mt-1 hover:text-yellow-500 cursor-pointer'>
          {icon ? icon : ""} <span className='ml-1'>{name ? name : ""}</span>
        </a>
      </Link>
    </div>
  );
}

export default subSidebarLink;
