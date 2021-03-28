import Link from "next/link";
function nonExtendedLink({ name, iconClass, icon,route }) {
  return (
    <div className='mb-2'>
      <Link href={route?route:'#'}>
        <a className='hover:text-yellow-500 cursor-pointer inline-block'>
          <div className='flex items-center'>
            <div className='ml-0.5 mr-3 '>
              <div className={`${iconClass ? iconClass : ""}`}>
                {icon ? icon : ""}
              </div>
            </div>
            <span>{name ? name : "Invalid Name"}</span>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default nonExtendedLink;
