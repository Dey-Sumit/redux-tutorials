import React from 'react'
import Note from './Note'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { db } from '../firebase'

const AllNotes = ({ all_notes, toggleImportantNotes, dispatch }) => {


    useEffect(() => {
        db.collection('notes').onSnapshot(snapshot => {
            const datas = snapshot.docs.map(doc => doc.data())
            console.log(datas);
        })
    }, [])

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
