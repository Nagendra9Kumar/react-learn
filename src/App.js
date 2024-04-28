import image from './image.png';
const Nav = () => {
  return (
    <>
      <nav className="flex bg-black w-screen justify-between pr-12 border-b-[1px]">

        <ul className="flex w-2/5 justify-evenly px-2 text-white items-center">
          <li><a href="http://127.0.0.1:3000" className='no-underline'>Home</a></li>
          <li><a href="http://127.0.0.1:3000" className='no-underline'>About</a></li>
          <li><a href="http://127.0.0.1:3000" className='no-underline'>Contact</a></li>
          <li><a href="http://127.0.0.1:3000" className='no-underline'>Portfolio</a></li>
        </ul>
        <img src={image} alt="image1" className="size-8 m-2 hover:animate-spin"></img>
      </nav>
    </>
  );
}
const Sec = (props) => {
  return (
    <>
      <section className='flex h-screen bg-black justify-center items-center snap-start'>
        <h1 className='text-white animate-ping'>{props.uname}</h1>
      </section>
    </>
  );
}
const App = () => {
  return (
    <>
      <Nav />
      <div className="App bg-black h-[92.2] snap-mandatory snap-y overflow-y-scroll overscroll-x-none">
        <Sec uname='Im Nagendra' />
        <Sec uname='Studing 2nd Cad' />
        <Sec uname='20 yr old' />
      </div></>
  )
}
export default App;