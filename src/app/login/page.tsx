
export default function Login() {


  return (
    <>
      <main>
        
          <form action="/login-progress" className="flex m-auto gap-2  flex-col max-w-[300px]">

            <input type="text" className=" border-2  rounded border-y-slate-400 px-2 py-3"  placeholder="login" />

            <button className=" bg-red-200 " type="submit" > login</button>
          </form>

      </main>
    </>
  );
}
