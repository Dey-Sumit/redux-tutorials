import React from 'react'
import { connect } from 'react-redux'
import { toggleImportantNotes } from '../redux/actions/notes.action'
const Note = ({ data: { body, id, date, isImportant }, toggleImportantNotes }) => {
    return (
        <div className="card text-white bg-success m-2" style={{ width: '15rem' }}>
            <div className="card-header">{date}</div>
            <div className="card-body">
                <p className="card-text">{body}</p>
                <button className="btn btn-primary"
                    onClick={() => toggleImportantNotes(id)}>{isImportant ? 'Remove from important' : 'Add to important'}</button>
            </div>
        </div>

    )
}

export default connect(null, { toggleImportantNotes })(Note)
