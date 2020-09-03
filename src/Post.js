import React from 'react'

export default function Post(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.match.params.post_id}</h1>
        </div>
    )
}
