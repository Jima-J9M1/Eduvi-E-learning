import Nav from '../../Components/Common/Nav';

export type application = {
    resume:string,
    essay:string,
    portfolio:string | undefined
}

export default function ApplicationForm() {
  return (
    <div>
    <Nav />
    
    <div className='p-3 mx-2 sm:w-3/4 lg:w-1/2 sm:m-auto sm:flex-col sm:gap-y-12 border border-green-300 border-t-4 border-t-green-600 sm:mt-24 mt-24'>
        <h1 className='text-center font-bold text-2xl'>Application Form</h1>
        <div className='mt-4'>
            <label className="block mb-2 text-sm font-medium text-gray-900 text-[20px]" htmlFor="user_avatar">Resume</label>
            <input type="password" id="password" className="outline-0 shadow-sm  text-sm rounded-lg border border-green-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Resume Link"></input>
        </div>

        <div className='mt-8'>
            <label htmlFor="message" className="block mb-2 text-sm font-medium sm:text-[20px]">Essay</label>
            <textarea id="message"  rows={4} 
            className="outline-0 block p-2.5 w-full text-sm rounded-lg border border-green-300  focus:ring-blue-500 focus:border-blue-500" placeholder="Write an essay" required></textarea>
        </div>

        <div className='mt-8'>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-[20px]">Portfolio Link (<span className='text-'>Optional</span>)</label>
            <input type="password" id="password" className="outline-0 shadow-sm  text-sm rounded-lg border border-green-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Portfolio Link"></input>
        </div>

        <div className='my-12 flex justify-center border'>
            <button type="button" className="w-1/2 sm:w-1/3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 
            font-medium rounded-lg text-sm sm:px-16 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Apply</button>
        </div>
        </div>

    
    </div>

  );
}

