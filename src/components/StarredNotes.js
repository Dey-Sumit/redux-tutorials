import React from 'react'
import { connect } from 'react-redux'
import Note from './Note'

const StarredNotes = ({ allNotes }) => {
    return (
        <div className="importantNotes">
            <h4>Important Notes</h4>
            <div className="row">
                {
                    allNotes.filter(note => note.isImportant === true)
                        .map(note => <Note data={note} key={note.id} />)
                }
            </div>

        </div>
    )
}
const mapStateToProps = state => ({
    allNotes: state.all_notes
})
export default connect(mapStateToProps)(StarredNotes)
