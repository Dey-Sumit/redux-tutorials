import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'
import StarredNotes from './components/StarredNotes'
import { load_data } from './redux/actions/notes.action'
import store from './redux/store'



const App = ({ loading }) => {
    useEffect(() => {
        store.dispatch(load_data())
    }, [])

    return (
        <div className="container p-6 my-2">
            <h3 className="text-center mb-4">Noty : A collection of notes</h3>
            <CreateNote />
            <div className="text-center">
                {
                    loading ? <><div class="spinner-border m-3 " />

                    </> : null
                }
            </div>
            <hr />
            <StarredNotes />
            <hr />
            <AllNotes />
        </div>
    )
}
const mapStateToProps = state => ({
    loading: state.loading
})
export default connect(mapStateToProps)(App)
