import * as React from 'react';
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  const currentYear:number = new Date().getFullYear();

    return (
     <footer className="bg-gray-900 text-white py-8">
      <div className=" justify-content mx-auto w-5/6 gap-16 flex justify-between flex-row md:flex ">
       
        {/* Column 1 */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4 ">[Microsun<span className='whitespace-nowrap'> and Soution]</span> </h2>
          <p className="text-base font-light mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <div className="w-420 h-88 mx-auto mt-16 py-1 rounded-t-lg bg-yellow-200 flex flex-col text-black">
                
            <div className="flex justify-evenly mb-2 font-light text-xs">
              <div >
                <span>Email:</span>
                <br />
                <span>contact@web.com</span>
              </div>
              <div >
                <span >Telephone:</span>
                <br />
                <span>+66789900</span>
              </div>
      
           </div>
          </div>
        </div>
       
       
        {/* column2 */}
         
          <div className=" container w-626 h-144 top-64 left-738 flex justify-end flex-row  ">
         
            <div className=''>
              <h3 className="text-lg font-medium mb-2 ">Social Media</h3>
              <ul className=" list-inside">
              <li className="text-base font-normal mb-1 ">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li className="text-base font-normal mb-1">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
             <li className="text-base font-normal mb-1">
               <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
             </li>
              </ul>
            </div>
            
           
            
            <div className="ml-8">
              <h3 className="text-lg font-medium mb-2">Program</h3>
              
              <ul className="list-inside">

                <li className="text-base font-normal mb-1">
                  <Link to="/program/free">
                    Free to study  
                  </Link>
                </li>

                <li className="text-base font-normal mb-1">
                  <Link to="/program/backend">
                    Backend
                  </Link>
                </li>

                <li className="text-base font-normal mb-1">  
                  <Link to="/program/frontend">
                    Frontend
                  </Link>      
                </li>

              </ul>

            </div>
          
          <div className="ml-8">
            <h3 className="text-lg font-medium mb-2">Support</h3>

            <ul className="list-inside">

              <li className="text-base font-normal mb-1">
                <Link to="/privacy">
                  Privacy Policy  
                </Link>
              </li>

              <li className="text-base font-normal mb-1">
                <Link to="/provision"> 
                  Provision
                </Link>
              </li>

              <li className="text-base font-normal mb-1">
                <Link to="/provision">
                  Provision
                </Link>
              </li>

            </ul>

          </div>
          </div>
       
       
     
      </div>
        <div className='justify-center mx-auto mt-6 flex w-1440 h-360'> &copy; copyright MSS {currentYear} </div>

    </footer>
   );
      };
export default Footer; 
 





















