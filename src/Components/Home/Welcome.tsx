
import bg from '../../assets/Rectangle 2868.png'
import group from '../../assets/Group 2621.png'
import Purplebtn from '../Botton/Purplebtn'
type Props = {}
console.log(bg)
export default function Welcome({}: Props) {
  return (
    <div className='flex flex-row mt-12'>
        <div className='w-1/2 relative'>
            <p className='bg-white px-4 py-3 mb-2 font-light inline-block rounded-xl text-red-500'>Never stop learning</p>
            <h1 className='font-bold text-7xl text-gray-700'>Grow up your skills by online courses with MSS</h1>
            <div className='absolute bottom-0 left-20'>
              <Purplebtn text='Apply for internship'/>
            </div>
        </div>
        <div className='relative mt-5'>
            <img src={bg}alt="" />
            <img className='absolute inset-6 ' src={group} alt="" />
        </div>
    </div>
  )
}