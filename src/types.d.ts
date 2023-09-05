interface CourseCardProps {
  image?: string;
  rating?: number;
  description?: string;
  videos?: number;
  duration?: number;
  name?: string;
  students?: number;
  courseType?: string;
  id: number;
}

interface QuoteProps {
  title?: string;
  quote?: string;
}
interface TestimonialProps {
  img?: string;
  testimonial?: string;
  name?: string;
  occupation?: string;
}

interface PasswordFieldProps {
  register: UseFormRegister<{
    password: string;
    email: string;
    fullname: string;
  }>;
  error: string | undefined;
}

interface Breadcrumb {
  label?: string;
  url?: string;
}

interface SimilarCoursesProps {
  img?: string;
  title?: string;
  price?: number;
  rating?: number;
}
interface RatingPoint {
  rating: number;
}
interface PaginatonProps {
  totalPost?:number;
  postPerPage?:number;
  currentPage?:number;
  setPage: (pageNumber:number) => void
}
