interface AvaterProps {
    name?:string
    img?:string
}

export interface CourseCardProps {
  average_rating:number,
  category : string,
  category_id : number,
  description : string,
  enrollment_count : number,
  id:number,
  introduction_video:string,
  name:string,
  price:string,
  target_audience:string,
  thumbnail:string,
  video_count:number,
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
  
  export interface PasswordFieldProps {
    register: UseFormRegister<{
      password: string;
      email: string;
      firstName:string,
      lastName:string;
      phone_number:string;
      country:string;
      city:string;
      university:string;
      department:string;
      git_link:string;
      linkdln_link:string;
      profile_img:string

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
  interface ButtonProps {
    text?:string;
    onClick?: () => void;
  
  }

  export interface Timestamp {
    time: number;
  }
  
  interface TimestampPlaylistProps {
    timestamps: Timestamp[];
    onSeek: (time: number) => void;
  }
  
  interface TimestampProps {
    time: number;
    onClick: () => void;
  }
  
  interface VideoProps {
    src: string;
    timestamps: Timestamp[];
    poster?: '../../assets/images/poster.jpg'; 
    autoplay?: false;
    controls?: true;
    loop?: false;
    muted?: false;
    preload?: 'auto' | 'metadata' | 'none';
    onPlay?(): void;
    onPause?(): void;
    onEnded?(): void;
  }
