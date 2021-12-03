import React from 'react'
import {FormattedMessage} from 'react-intl'
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie'
const TableMovies = (props) => {
    const esLink="https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json"
    const enLink="https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json"
    
    const [movies, setMovies] = useState([])
    const [click, setClick] = useState(0)
    const [selected, setSelected] = useState({})

    useEffect(() => {
        if(props.lang==='es'){
            fetch(esLink).then( (res)=> res.json()).then( (apires) => {
                console.log(apires)
                setMovies(apires)
            })
        }else{
            fetch(enLink).then( (res)=> res.json()).then( (apires) => {
                console.log(apires)
                setMovies(apires)
        })}
        
        
    }, [])
    const handleClick = () => setClick(!click);
    const handleSelected = (movie) =>{ setSelected(movie)
                                        setClick(!click)};
    console.log("selected")        
    console.log(selected)

    return (
        <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th scope="col"><FormattedMessage id="Name"/></th>
                <th scope="col"><FormattedMessage id="Director"/></th>
                <th scope="col"><FormattedMessage id="Country"/></th>
                <th scope="col"><FormattedMessage id="Budget"/></th>
                <th scope="col"><FormattedMessage id="Release"/></th>
                <th scope="col"><FormattedMessage id="Views"/></th>
                </tr>
            </thead>
            <tbody>
                {movies?.map((e,i)=>(<Movie movie={e} id={i} selected={handleSelected}/>))
                })
            </tbody>
            </Table>
        </div>
    )
}

export default TableMovies
