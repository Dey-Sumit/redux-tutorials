import store from "../store"

export const add_new_note = (data) => {
    return (dispatch) => {
        // do some api calls,database query
        //  then prepare the data and use that data as payload
        dispatch({
            type: "ADD_NOTE",
            payload: data
        })
    }
}


export const toggleImportantNotes = (note_id) => dispatch => {
    // some db stuff
    dispatch(
        {
            type: "TOGGLE_IMPORTANT_NOTE",
            payload: note_id
        }
    )
}