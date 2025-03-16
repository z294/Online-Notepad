function Note(props) {
    return (
        <div className="notes-container">
            <header className="notes-header"></header>
            <h2 className="notes-title">{props.title}</h2>
            <p className="notes-content">{props.content}</p>
            <button className="notes-delete-button" onClick={() => props.deleteNote(props.id)}>
                Delete Note
            </button>
        </div>
    );
}

export default Note;
