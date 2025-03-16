import NoteForm from "./NoteForm";
import Note from "./Note";
import react, {useState, useEffect} from 'react'


function App(){
    const [notes, setNotes] = useState([]);
    const [notesCount, setNotesCount] = useState(0); 

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes"));
        if (savedNotes) {
          setNotes(savedNotes);
          setNotesCount(savedNotes.length);
        }
      }, []);


    const addNotes = (title, content) => {
        const newNote = {id: Date.now(), title: title, content: content}
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        setNotesCount(notesCount + 1); 
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };

    const deleteNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id); 
        setNotes(updatedNotes); 
        setNotesCount(notesCount - 1); 

        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };
    

    return(
        <>
        <header className="main-header">Online Notepad</header>
        
        <div>
            <NoteForm addNotes={addNotes} />
            <p> Current numbers of notes: {notesCount}</p>
        </div>

        <div className="notes-grid">
            {notes.map((note => (
                <Note
                    key={note.id} 
                    title={note.title} 
                    content={note.content}
                    id={note.id}
                    deleteNote={deleteNote}
                     />
            )))}
        </div>
        </>
    )

}

export default App; 