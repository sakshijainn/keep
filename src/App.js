import "./App.css";
import {useState,useEffect} from "react"
import {nanoid} from 'nanoid'
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
function App() {
  const[notes,setNotes ] = useState([{
    id :  nanoid(),
    text : "This is test",
    date :"13/04/21"
  }
  ,
  {
    id :  nanoid(),
    text : "This is test2",
    date :"12/06/21"
  },
  {
    id :  nanoid(),
    text : "This is test3",
    date :"1/09/21"
  }
]);

const[searchText, setSearchText] = useState('')
const[darkMode, setDarkMode] = useState(false);

useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('react-notes'))
  if(savedNotes)
  {
    setNotes(savedNotes)
  }

},[])
useEffect(() => {
  localStorage.setItem('react-notes',JSON.stringify(notes))
}, [notes])

const addNote =(text)=>{
   const date = new Date();
   const newNote = {
     id : nanoid(),
     text :text,
     date : date.toLocaleDateString()
  }

  const newNotes =[...notes , newNote];
   setNotes(newNotes);

}

const deleteNote =(id) =>{
  const newNotes=  notes.filter((note)=>note.id !== id)
  setNotes(newNotes)
}
    return (
    <div className ={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode ={setDarkMode}/>
      <Search handleSearchNote ={setSearchText}/>
      <NotesList notes ={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
      handleAddNote ={addNote} 
      handleDeleteNote ={deleteNote}/>
    </div>
    </div>
    
  );
}

export default App;
