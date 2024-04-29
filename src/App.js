import image from './image.png';

const Nav = () => {
  return (
    <>
      <nav className="flex bg-black w-screen h-[8vh]  justify-between items-center">
        <ul className="flex justify-start gap-7 max-sm:gap-2 max-sm:ml-2 mr-auto ml-7 px-2 max-sm:text-sm text-white text-xl ">
          <li><a href="http://127.0.0.1:3000" className='no-underline  hover:text-gray-500'>Home</a></li>
          <li><a href="http://127.0.0.1:3000" className='no-underline  hover:text-gray-500'>About</a></li>
          <li><a href="http://127.0.0.1:3000" className='no-underline  hover:text-gray-500'>Contact</a></li>
          <li><a href="http://127.0.0.1:3000" className='no-underline  hover:text-gray-500'>Portfolio</a></li>
        </ul>
        <img src={image} alt="image1" className="max-sm:size-7  md:ml-auto md:mr-7 mr-2 size-9 hover:animate-spin"></img>
      </nav>

    </>
  );
}
const Sec = (props) => {
  return (
    <>
      <section className='flex h-[92vh] bg-black justify-center items-center snap-start'>
        <h1 className='text-white text-6xl max-md:text-3xl max-sm:text-xl animate-ping hover:text-green-500'>{props.uname}</h1>
      </section>
    </>
  );
}
const App = () => {
  return (
    <>
      <Nav />
      <div className="App bg-black h-[92vh] snap-mandatory snap-y overflow-y-scroll overscroll-x-none">
        <Sec uname='Im Nagendra' />
        <Sec uname='Studing 2nd Cad' />
        <Sec uname='20 yr old' />
      </div>
    </>

  )
}
export default App;