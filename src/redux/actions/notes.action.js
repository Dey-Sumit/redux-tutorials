import { db } from "../../firebase"

export const add_new_note = (data) => {
    return async (dispatch) => {

        try {
            dispatch({
                type: "SET_LOADER"
            })
            // add new note in DB

            await db.collection('notes').doc(data.id.toString()).set(data)

            // // get all the notes from db
            // const snapshot = await db.collection('notes').get()

            // // console.log(snapshot);

            // // prepare the data
            // const all_notes = snapshot.docs.map(doc => doc.data())

            // dispatch
            dispatch({
                type: "ADD_NOTE",
                payload: data
            })

        } catch (error) {
            console.log(error);
            // dispatch
            dispatch({
                type: "ADD_NOTE_FAILURE",
                payload: error.message
            })
        }

    }
}

export const load_data = () => async dispatch => {
    dispatch({
        type: "SET_LOADER"
    })
    try {

        const snapshot = await db.collection('notes').get()

        // console.log(snapshot);

        // prepare the data
        const all_notes = snapshot.docs.map(doc => doc.data())

        // dispatch
        dispatch({
            type: "LOAD_NOTES",
            payload: all_notes
        })

    } catch (error) {
        console.log(error);
    }
}

export const toggleImportantNotes = (note_id) => async dispatch => {
    dispatch({
        type: "SET_LOADER"
    })
    try {

        const snapshot = db.collection('notes').doc(note_id.toString())

        const note = (await snapshot.get()).data();

        await snapshot.update({
            isImportant: !note.isImportant
        })

        dispatch(load_data())

    } catch (error) {
        console.log(error);
    }

}