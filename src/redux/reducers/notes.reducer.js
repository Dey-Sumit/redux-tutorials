const initialState = {
    all_notes: [],
    loading: false,
    errorMessage: null
}

// reducer returns a new state
const reducer = (previousState = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case "SET_LOADER":
            return {
                ...previousState,
                loading: true
            }
        case "ADD_NOTE":
            return {
                ...previousState,
                all_notes: [...previousState.all_notes, payload],
                loading: false
            }
        case "ADD_NOTE_FAILURE":
            return {
                ...previousState,
                errorMessage: payload,
                loading: false
            }
        case "LOAD_NOTES":
            return {
                ...previousState,
                all_notes: payload,
                loading: false
            }
        // case "TOGGLE_IMPORTANT_NOTE":
        //     const new_all_notes = previousState.all_notes.slice() // duplicate array
        //     const index = new_all_notes.findIndex(note => note.id === payload)
        //     const note = new_all_notes[index];
        //     const newNote = {
        //         ...note,
        //         isImportant: !note.isImportant
        //     }
        //     new_all_notes[index] = newNote
        //     return {
        //         ...previousState,
        //         all_notes: new_all_notes
        //     }
        default:
            return previousState
    }
}
export default reducer