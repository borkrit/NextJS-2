'use client'

import { useRouter } from "next/router";
import { checkAuth } from "../action";


export default async function Layout ({children,admin,user}:any){

    await new Promise((resolve) => setTimeout(resolve, 1000));

    
    
    const userType:any = await checkAuth();
    console.log(userType)
    return(
        <div>
            {userType === 'admin' ? admin : user}

            {children}

        </div>
    )
}

