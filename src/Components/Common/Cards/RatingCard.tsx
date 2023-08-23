import StarIcon from '@mui/icons-material/Star';

type Props = {
    rating:number
}

function RatingCard({rating}: Props) {
  return (
    <div>
        <StarIcon sx={{
          color: rating >1 ? "#FFC107":"#A9A9A9"
        }} />
        <StarIcon sx={{
          color: rating >=2 ? "#FFC107":"#A9A9A9"
        }}/>
        <StarIcon sx={{
          color: rating >=3 ? "#FFC107":"#A9A9A9"
        }}/>
        <StarIcon sx={{
          color: rating >=4 ? "#FFC107":"#A9A9A9"
        }}/>
        <StarIcon sx={{
          color: rating >=5 ? "#FFC107":"#A9A9A9"
        }}/>
    </div>
  )
}

export default RatingCard