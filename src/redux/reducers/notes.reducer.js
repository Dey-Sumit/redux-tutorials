const initialState = {
    all_notes: [{
        id: 1,
        body: "I am a good note :)",
        date: '10/11/20'
    },
    {
        id: 2,
        body: "I am a bad note :)",
        date: '20/01/30'
    }],

}


// reducer returns a new state
const reducer = (previousState = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case "ADD_NOTE":
            return {
                ...previousState,
                all_notes: [...previousState.all_notes, payload]
            }
        case "TOGGLE_IMPORTANT_NOTE":
            const new_all_notes = previousState.all_notes.slice() // duplicate array
            const index = new_all_notes.findIndex(note => note.id === payload)
            const note = new_all_notes[index];
            const newNote = {
                ...note,
                isImportant: !note.isImportant
            }
            new_all_notes[index] = newNote
            return {
                ...previousState,
                all_notes: new_all_notes
            }
        default:
            return previousState
    }
}
export default reducer