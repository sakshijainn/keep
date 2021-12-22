import React,{useState} from 'react'

function AddNotes({handleAddNote}) {
    const [noteText , setNoteText] = useState("")
    const characterLimit = 200;
    const handleChange =(e) =>{
        if(characterLimit-e.target.value.length>0)
        {
            setNoteText(e.target.value)
        }
        
    }
    const handleClick =()=>{
            if(noteText.trim().length>=0)
            {
                handleAddNote(noteText)
                setNoteText("")
            }

            
    }
    return (
        <div className ="note new">
            <textarea 
            value={noteText}
            onChange ={handleChange}
            rows="8" cols="10"
            placeholder ="type to add note"
            ></textarea>

            <div className ="note-footer">
                <small>{characterLimit-noteText.length} remaining</small>
                <button onClick ={handleClick}
                 className ="save"> Add</button>
            </div>
        </div>
    )
}

export default AddNotes
