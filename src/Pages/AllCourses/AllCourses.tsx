import CourseListed from "../../Components/Course/CourseListed"
import Nav from "../../Components/Common/Nav"
import SubscriptionBox from "../../Components/Common/SubscriptionBox"
import Footer from "../../Components/Common/Footer"
import HeaderContainer from "../../Components/BreadCrumbs/HeaderContainer"
import AllCourseHeader from "../../Components/AllCourseHeader"

function AllCourses() {
  return (
    <div>
        <Nav />        
        <div className = "m-catb-pos">
        
        <HeaderContainer>
         <AllCourseHeader />
        </HeaderContainer>
        <CourseListed />
        </div>
        <SubscriptionBox />
        <Footer />
    </div>
  )
}

export default AllCourses
