import './App.css';
import Searchbar from './Components/Searchbar';

function App() {
  return (
   <>
   <div className='mx-auto flex justify-center p-0 m-0 bg-black min-h-screen'>
    {/* <div className="flex justify-center">
      <h2 className="text-cyan-800">SearchChessBuddy</h2>
    </div> */}
   <Searchbar/>

   </div>
   </>
  );
}

export default App;
