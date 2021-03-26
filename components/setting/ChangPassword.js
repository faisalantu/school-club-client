export default function ChangPassword(props) {
    return (
        <form >
            <div className='grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 mt-5'>
                <div className='md:col-span-2 md:w-1/2 flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4'>
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="Old Password">Old Password</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="password" aria-describedby="emailHelp" placeholder="Enter old password" />
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="New Password">New Password</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="password" aria-describedby="emailHelp" placeholder="Enter New password" />
                </div>
                <div className='flex flex-col mb-8 sm:pr-6 md:pr-10 lg:pr-40 pr-4' >
                    <label className='mb-2 text-lg text-grey-darkest' htmlFor="Re-enter New Password">Re-enter New Password</label>
                    <input className='rounded-lg border bg-gray-300 py-2 px-3 text-grey-darkest' type="password" aria-describedby="emailHelp" placeholder="Enter Re-enter New password" />
                </div>


                <div className='  flex flex-row justify-end' >
                    <button type="submit" className="border-2 rounded-lg bg-gray-200 border-green-200 px-10 py-2.5">Save Change</button>
                </div>
            </div>
        </form>);
}