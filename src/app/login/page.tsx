"use client"
import { useRouter } from "next/navigation";
import { useRef } from "react";
import {authUser} from '@/app/action'

export default function Login() {
  const router = useRouter()
  const ref = useRef()

  // const handelSubmit = (event: { preventDefault: () => void; })=>{
  //   event.preventDefault();
  //   authUser(ref.current?.value)
  //   router.push(`/login-progress`);

  // }
  
  return (
    <>
      <main>
        
          <form  className="flex m-auto gap-2  flex-col max-w-[300px]">

            <input ref={ref} type="text" className=" border-2  rounded border-y-slate-400 px-2 py-3"  placeholder="login" />

            <button className=" bg-red-200 " type="submit" > login</button>
          </form>

      </main>
    </>
  );
}

