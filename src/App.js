import './App.css';
import image from "./images/logo2.jpg"

function App() {
  return (
    <div className="App px-8 md:px-16 max-w-screen-2xl min-h-screen font-sans antialiased text-slate-800 flex flex-col">
      <header className='py-8'>
        <a href="#">
          <img src={image} alt="logo" className='h-20'/>
        </a>
      </header>
      
      <section className='flex flex-col lg:flex-row gap-20 py-10 md:py-16'>
        <section className='flex-1 '> 
        <h1 className="font-semibold text-6xl leading-tight text-black">Join us at the Biggest Front Conf.</h1>
        <p className="mt-2 text-violet-500 text-xl">July 2023- Bengaluru</p>
        <p className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>

        <section className="bg-white shadow-xl rounded-lg max-w-lg flex-1">
         <div className="bg-violet-400 p-8 rounded-t-lg grid place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-white">
          <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
         <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
         </svg>
        </div>
        <div className="p-10">
           <p>Get Notified of all the updates</p>
           <form className="flex flex-col sm:flex-row sm:gap-0 gap-3 mt-3 lg:mt-8">
             <input type="email" placeholder="Email Address" className="border flex-grow border-gray-300 px-4 py-2 rounded-md sm:rounded-r-none hover:border-violet-400 focus:outline-none focus:border-violet-500"/>
             <button className="bg-violet-400 px-4 py-2 rounded-md text-white font-semibold sm:rounded-l-none">Notify Me</button>
           </form>
        </div>
        </section>
      </section>
      <footer className='mt-auto'>
        <ul className='flex gap-6 text-sm text-white lg:text-slate-400 py-6'>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
