const LoginPage = () => {
  return (
    <main className="h-screen bg-gray-200 grid place-items-center z-[9] relative">
      <div className="w-[55px] h-[55px] bg-red-800 absolute top-[30%] left-[50%] rounded-full"></div>
      <div className="w-[65px] h-[65px] bg-red-800 absolute bottom-[35%] left-[65%] rounded-full"></div>

      <section className="w-1/3 h-auto rounded-xl bg-indigo-500 overflow-hidden shadow-lg bg-opacity-80 backdrop-filter backdrop-blur-lg z-10 ">
        <form className="w-full flex flex-col gap-5 px-6 py-4 ">
          <h3>Login 👋🏻</h3>

          <div className="w-full flex flex-col gap-2 ">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
            />
          </div>

          <div className="grid place-items-center">
            <button
              type="submit"
              className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
