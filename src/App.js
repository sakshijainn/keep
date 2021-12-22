import './App.css';
import Header from "./components/Header.jsx"
import CreateNote from "./components/CreateNote.jsx"
function App() {

  const [arr , upArr ] = useState([])

  const thisFun = (val) =>{
    upArr ((obj)=>{
      return ([...obj ,val])
    })
  }
  return (
    <div>

      <Header/>
      <CreateNote passnote ={thisFun}/>
    
    </div>
  );
}

export default App;
