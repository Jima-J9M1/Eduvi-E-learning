import { useForm } from 'react-hook-form';
import Nav from '../../Components/Common/Nav';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

    export type Application = {
        resume:string,
        essay:string,
        portfolio:string | null | undefined
    }

export default function ApplicationForm() {

    const schema = yup
    .object().shape({
        essay:yup.string().required(),
        resume:yup.string().url().required(),
        portfolio:yup.string().nullable().notRequired().when('portfolio', {
            is: (value:string) => value?.length,
            then: (rule) => rule.url(),
        }),
    },
        [
            ['portfolio', 'portfolio'],
        
        ]
    )

    type FormData = yup.InferType<typeof schema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data:any) => console.log(data)

  return (
    <div>
    <Nav />
    
    <form className='p-3 mx-2 sm:w-3/4 lg:w-1/2 sm:m-auto sm:flex-col sm:gap-y-12 border border-green-300 border-t-4 border-t-green-600 sm:mt-24 mt-24' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-center font-bold text-2xl'>Application Form</h1>
        <div className='mt-4'>
            <label className="block mb-2 text-sm font-medium text-gray-900 text-[20px]" htmlFor="user_avatar">Resume</label>
            <input 
            type="text" 
            id="resume"
            {...register('resume')} 
            className="outline-0 shadow-sm  text-sm rounded-lg border border-green-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Resume Link"></input>
            <span className="text-red-500">{errors.resume?.message}</span>
        </div>

        <div className='mt-8'>
            <label htmlFor="message" className="block mb-2 text-sm font-medium sm:text-[20px]">Essay</label>
            <textarea id="message"  rows={4} 
            {...register('essay')}
            className="outline-0 block p-2.5 w-full text-sm rounded-lg border border-green-300  focus:ring-blue-500 focus:border-blue-500" placeholder="Write an essay" required></textarea>
            <span className="text-red-500">{errors.essay?.message}</span>
        </div>

        <div className='mt-8'>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-[20px]">Portfolio Link (<span className='text-'>Optional</span>)</label>
            <input 
            type="text" 
            id="portfolio"
            {...register('portfolio')} 
            className="outline-0 shadow-sm  text-sm rounded-lg border border-green-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Portfolio Link"></input>
            <span className="text-red-500">{errors.portfolio?.message}</span>
        </div>

        <div className='my-12 flex justify-center'>
            <button type="submit" 
            className="w-1/2 sm:w-1/3  text-white bg-green-700 hover:bg-green-800 
            font-medium rounded-lg text-sm sm:px-16 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 ">Apply</button>
        </div>
        </form>

    
    </div>

  );
}

