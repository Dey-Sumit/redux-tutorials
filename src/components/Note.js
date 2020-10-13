import React from 'react'

const Note = ({ body, id, date }) => {
    return (
        <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header">{date}</div>
            <div className="card-body">
                <p className="card-text">{body}</p>
            </div>
        </div>

    )
}

export default Note
