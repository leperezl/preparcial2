import React from 'react'
import { FormattedMessage } from 'react-intl'

const Movie = (props, selected) => {
    return (
        <tr onClick={() => this.selected(props.movie)  }>
        <td>{props.movie.id}</td>
        <td>{props.movie.name}</td>
        <td>{props.movie.directedBy}</td>
        <td>{props.movie.country}</td>
        <td>{props.movie.budget}</td>
        <td>{props.movie.releaseDate}</td>
        <td>{props.movie.views}</td>
    </tr>
    )
}

export default Movie
