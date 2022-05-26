import React, { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";


export const Detail = () => {

    let params = useParams()

    const [char, setChar] = useState('')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = () => {
        fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
            .then(res => res.json())
            .then(json => {
                setChar(json)
            }).catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData()
      }, []);


    return (
        <div className='App'>
            <p>{char.name}</p>
        </div>
    );

    }

export default Detail;