
import { QuoteProps } from '../../types';

const Quote: React.FC<QuoteProps> = ({
        title = 'Qualified lessons for students',
        quote = 'A lesson or class is a structured period of time where learning is intended to occur. It involves one or more students being taught by a teacher or instructor.',

}) => {
    return (
        <div className = "flex justify-center items-center mb-10 ">
            <div className = "text-center w-quote-width h-quote-height md:m-10 md:p-10 p-5">
            <h1  className="text-4xl font-bold text-center text-quote-title-color">{title}</h1>
            <p className = "font-sans text-base font-normal leading-7 tracking-normal text-center text-quote-color w-full p-2">{quote}</p></div>
        </div>
    )
}

export default Quote
