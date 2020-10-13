import React from 'react'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'

const App = () => {
    return (
        <div className="container">
            <CreateNote />
            <AllNotes />
        </div>
    )
}

export default App
