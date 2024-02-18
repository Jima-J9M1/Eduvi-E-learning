import React from 'react';
import {useForm, Resolver} from 'react-hook-form';
import SubscribeButton from '../Buttons/SubscribeButton';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import {Toaster,toast} from "react-hot-toast"
import { CoustemSubscription } from '../../Api/internApplication';
import { useState } from 'react';


type FormValues = {
  email:string;
}

const schema = yup.object({
  email: yup
    .string()
    .email('Must be a valid email') 
    .required('Email is required')
});

const SubscriptionBox: React.FC = () => {
  const [email,setEmail]=useState("")
 
  const props ={
    onSuccess:(data)=>{
        console.log(data);
     return   toast.success("Subscription successful");  
    },
    onError:(error)=>{
        console.log(error);
       return toast.error("some thing is wrong please try a gain");  
    },
    email:email
  }
const{refetch}=CoustemSubscription(props)


    const {register,handleSubmit, formState: {errors},} = useForm<FormValues>({ 
        resolver: yupResolver(schema) as Resolver<FormValues>,
      });
   
    const onSubmit=(data:{email:string}) =>{
            setEmail(data.email) 
            return refetch()     
    }
   
 
    return (
    <div className="w-full max-w-[95%] mx-auto  px-8 lg:px-16 my-20 h-80  bg-[#0A033C]
     text-white rounded-lg flex flex-col items-center justify-center">
      <div className="text-center">
        <p className="text-4xl max-w-prose font-bold leading-14  ">
          Subscribe to get updates
          <br />
          every new course
        </p>
      </div>
      <div className="text-center mt-4">
      <p className="font-light text-sm leading-6 text-white opacity-40 max-w-prose mx-auto  tracking-tighter">
          20k+ students daily learn with Eduvi, subscribe for new courses.
        </p>
      </div>
      <Toaster
       position="bottom-center"
       containerStyle={{
        position: 'relative',
        top:"40px",
        width:'300px'
      }}
       reverseOrder={false}
      />
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row justify-center mt-8">
          <input type="email"
            {...register("email")}
           
            className="w-full sm:w-auto h-10 px-4 py-2 rounded-l-lg rounded-bl-lg 
            mb-2 sm:mb-0  placeholder:text-black-400 placeholder:italic 
            bg-black bg-opacity-25 focus:bg-opacity-20 duration-150 focus:outline-none focus:border-gray-300  text-white focus:bg-black/25 focus:text-white"
            placeholder="enter your email"
            />
            
            <SubscribeButton
              onClick={handleSubmit(onSubmit)}
              text="Subscribe"
            />
          </div>
           
            {errors.email && <p className="text-red-500 ml-1">{errors.email.message}</p> }
      </form>
    </div>
  );
};

export default SubscriptionBox;