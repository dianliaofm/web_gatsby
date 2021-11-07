import React from 'react'

const Episode =(props) => {
    return (
        <div>
            episode id:{props.pageContext.id}, route key {props.params.routeKey}
        </div>
    )
}

export default Episode