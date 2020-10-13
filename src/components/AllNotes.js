import React from 'react'
import Note from './Note'
import { connect } from 'react-redux'

const AllNotes = ({ all_notes, toggleImportantNotes, dispatch }) => {
    console.log(dispatch);
    return (
        <div className="my-3">
            <h5>All Notes</h5>
            <div className="row ">
                {
                    all_notes.map((note) => <Note data={note} key={note.id} toggleImportantNotes={toggleImportantNotes} />)
                }
            </div>
        </div>
    )
}



const mapStateToProps = state => ({
    all_notes: state.all_notes
})
export default connect(mapStateToProps)(AllNotes)
