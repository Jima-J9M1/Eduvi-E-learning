import Apply from "../Apply"
import BoldTitle from "../Common/BoldTitle"
import CommentSlid from "./CommentSlid"


type Props = {}

export default function Middle({}: Props) {
  return (
    <div className="my-20 mx-24">
        <Apply/>
        <BoldTitle text="What do our internees say?" />
        <CommentSlid />
    </div>
  )
}