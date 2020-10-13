import React, { useState } from 'react'
import Note from './Note'

const AllNotes = () => {

    const [allNotes, setAllNotes] = useState([])

    return (
        <div className="my-3">
            <h5>All Notes</h5>
            {
                allNotes.map((note) => <Note data={note} key={note.id} />)
            }
        </div>
    )
}

export default AllNotes
