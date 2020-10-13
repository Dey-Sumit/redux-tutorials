import React, { useState } from 'react'

const CreateNote = () => {
    const [note, setNote] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        // basic validation
        if (note.length === 0) return;

        let data = {
            id: Math.floor(Math.random() * 10000),
            body: note,
            date: new Date().toJSON().slice(0, 10)
        }
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <textarea rows="3" className="form-control" value={note} onChange={e => setNote(e.target.value)}
                        placeholder="write your dream note :)"
                    ></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Add Note</button>
            </form>

        </div>
    )
}

export default CreateNote
