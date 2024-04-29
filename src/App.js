import image from './image.png';

const Nav = () => {
  return (
    <>
      <nav className="flex bg-black w-screen h-[9vh] justify-between pr-12 items-center">
        <ul className="flex justify-start gap-7 mr-auto ml-7 px-2 text-white text-xl ">
          <li><a href="http://127.0.0.1:3000" className='no-underline hover:text-gray-500'>Home</a></li>
          <li><a href="http://127.0.0.1:3000" className='no-underline hover:text-gray-500'>About</a></li>
          <li><a href="http://127.0.0.1:3000" className='no-underline hover:text-gray-500'>Contact</a></li>
          <li><a href="http://127.0.0.1:3000" className='no-underline hover:text-gray-500'>Portfolio</a></li>
        </ul>
        <img src={image} alt="image1" className="max-sm:size-7 ml-auto mr-2 md:size-9 hover:animate-spin"></img>
      </nav>

    </>
  );
}
const Sec = (props) => {
  return (
    <>
      <section className='flex h-[91vh] bg-black justify-center items-center snap-start'>
        <h1 className='text-white text-6xl animate-ping hover:text-green-500'>{props.uname}</h1>
      </section>
    </>
  );
}
const App = () => {
  return (
    <>
      <Nav />
      <div className="App bg-black h-[91vh] snap-mandatory snap-y overflow-y-scroll overscroll-x-none">
        <Sec uname='Im Nagendra' />
        <Sec uname='Studing 2nd Cad' />
        <Sec uname='20 yr old' />
      </div>
    </>

  )
}
export default App;