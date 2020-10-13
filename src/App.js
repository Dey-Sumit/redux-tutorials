import React, { useState } from 'react'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'
import StarredNotes from './components/StarredNotes'

const App = () => {


    return (
        <div className="container">
            <h3 className="text-center mb-4">Noty : A collection of notes</h3>
            <CreateNote />
            <hr />
            <StarredNotes />
            <hr />
            <AllNotes />
        </div>
    )
}

export default App
