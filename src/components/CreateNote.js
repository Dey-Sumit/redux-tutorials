import React, { useState } from 'react'
import { connect } from 'react-redux'
import { add_new_note } from '../redux/actions/notes.action'
const CreateNote = ({ add_new_note }) => {

    const [note, setNote] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        // basic validation
        if (note.length === 0) return;

        let data = {
            id: Math.floor(Math.random() * 10000),
            body: note,
            date: new Date().toJSON().slice(0, 10),
            isImportant: false
        }

        add_new_note(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <textarea rows="3" className="form-control" value={note} onChange={e => setNote(e.target.value)}
                        placeholder="write your dream note :)"
                        style={{ 'fontSize': '1.3rem' }}
                    ></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Add Note</button>
            </form>

        </div>
    )
}
const mapDispatchToProps = {
    add_new_note
}

export default connect(null, mapDispatchToProps)(CreateNote)
