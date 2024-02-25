import { Star,Watch } from '@mui/icons-material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PeopleIcon from '@mui/icons-material/People';
import { coursePre } from '../../types'
type Props = {

  data:coursePre
}

export default function CoursePreview({data}: Props) {
  return (
    <div className=''>
        <img width={445} src={data.image} alt="" />
        <div className='px-4 py-8 relative bg-white'>
          <div className='flex flex-row absolute -top-4 right-4 bg-black p-1 rounded-xl px-2 text-white'>
            <Star sx={{
              color:'yellow',
              fontSize:'14px'
            }}/> <p className='text-xs'>{data.rating}</p>
          </div>
          <h1 className='text-2xl font-semibold mb-2'>{data.title}</h1>
          <p className='text-gray-600 text-base mb-8'>{data.description}</p>
          <div className='flex flex-row justify-between text-gray-600 items-center'>
            <div><AccessTimeIcon/>{data.time} jam</div>
            <div><PlayCircleIcon/>{data.videos} video</div>
            <div><PeopleIcon/>{data.siswa} Siswa</div>
          </div>
        </div>
    </div>
  )
}