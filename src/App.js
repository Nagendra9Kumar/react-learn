import image from './image.png';
const Nav = () => {
  return (
    <>
      <nav className="flex w-screen justify-between pr-12 border-b-[1px]">

        <ul className="flex w-2/5 justify-evenly py-3 px-2 text-white">
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
const App = () => {
  return (
    <div className="App bg-black h-screen">
      <Nav />
    </div>
  )
}
export default App;