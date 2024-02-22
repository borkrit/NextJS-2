import './globals.css';
import React, { Suspense } from "react";
import Loading from './loading';
import Link from 'next/link';

function Layout(props: { children: React.ReactNode; }) {
    return (

        < html lang="en">

        <body>
            
            <header className=' h-10 bg-slate-200 p-1  '>
                <menu className=' max-w-3xl m-auto '>
                    <li>
                        <Link href={'/login'} > Login </Link>
                    </li>
                </menu>
            </header>

            <Suspense fallback={<Loading/>}>
                {props.children}
            </Suspense>

       
        </body>
        </html>
);
}

export default Layout;