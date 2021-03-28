import Link from "next/link";

function subSidebarLink({ icon, name, route }) {
  return (
    <div>
      <Link href={route ? route : "#"}>
        <a className='inline-block mt-1 hover:text-yellow-500 cursor-pointer'>
          <div className='flex items-center'>
            {icon ? icon : ""} <span className='ml-1'>{name ? name : ""}</span>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default subSidebarLink;
