import React, {FC} from 'react';
import Image from 'next/image';
import {FcGoogle} from 'react-icons/fc'



const SignIn: FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1100px] mx-auto justify-center min-h-screen max-h-fit">
            
            <div className="h-full ">
             <Image 
             src="/auth.jpg"
             alt="auth"
             height={500}
             width={500}
             className="floating"
             />
            </div>
            <div className="my-8 mx-auto">

                <Image 
                src="/logo.svg"
                alt="logo"
                width={200}
                height={200}
                className="mx-auto my-10"
                />
               <h1 className="font-primary md:text-3xl text-xl">
                Be a part of our Fam!
               </h1>

               <button className="my-4 flex font-secondary rounded-full outline-1 border-2 border-slate-400 hover:border-0 hover:bg-slate-400 hover:text-white mx-auto text-md p-2 px-4">
                <FcGoogle
                className="mr-2"
                fontSize={25}
                />
                Sign in with Google
               </button>
            </div>

        </div>
    )
}


export default SignIn;