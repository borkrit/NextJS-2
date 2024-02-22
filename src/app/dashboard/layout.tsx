export default async function Layout ({children,admin,user}:any){
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const userType:string = 'user'
    return(
        <div>
            {userType === 'admin' ? admin : user}

            {children}

        </div>
    )
}