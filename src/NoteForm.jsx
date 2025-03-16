import react, {useState} from 'react'


function NoteForm({addNotes}){
    const[title, setTitle] = useState("");
    const[content, setContent] = useState(""); 

    function handleSubmit(e){
        e.preventDefault(); 
        addNotes(title, content); 
        setTitle("")
        setContent("");
    }


    return(
        <form className="noteform-container" onSubmit={handleSubmit}>
            <input className="title-input" type='text' placeholder="Enter a title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea className="note-input" placeholder="Enter your notes"  value={content} onChange={ (e) => setContent(e.target.value)}/>  
            <button className="submit-button" type="submit" >Add Note</button>
        </form>

    )

}

export default NoteForm; 