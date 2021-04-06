import Link from "next/link";
function signup() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className=' max-w-lg sm:w-8/12 md:w-7/12 lg:w-5/12  text-center py-5 bg-white rounded-lg p-5'>
        <form className=' mx-2 sm:mx-5 md:mx-10'>
          <h1 className='text-xl font-light text-gray-800 sm:text-2xl'>
            Create a new account
          </h1>
          <p className='text-sm text-gray-500'>
            Already have an account ?
            <Link href='/login'>
              <a className='text-blue-700'> Sign in</a>
            </Link>
          </p>
          <div className='mt-8'>
            <input
              className='w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='text'
              placeholder='username'
              required
            />

            <div className=' grid grid-cols-2 gap-4 mt-4'>
              <input
                className='w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
                type='text'
                placeholder='first name'
                required
              />
              <input
                className='w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
                type='text'
                placeholder='last name'
              />
            </div>

            <input
              className='mt-4 w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='text'
              placeholder='email'
              required
            />
            <input
              className='mt-4 w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='password'
              placeholder='password'
              required
              minLength='6'
            />
            <input
              className='mt-4 w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='password'
              placeholder='password'
              required
              minLength='6'
            />
            <input
              className='mt-4 w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='number'
              placeholder='student id'
              required
            />
            <div className='flex w-full mt-4 mb-5'>
              <button
                type='submit'
                className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default signup;
