function tags({tags}) {
  return (
    <>
      <div className='flex items-center'>
        {tags.map((tag,i)=>{
          return <span key={i} className='mr-3 text-gray-500'>#{tag}</span>
        })}
      </div>
    </>
  );
}

export default tags;
