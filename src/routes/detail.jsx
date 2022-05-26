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
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


    return (
        <div className='App'>
             <div className='container'>
                  <div className='row'>
                    <div className='profile-detail'>
                        <div className='view'>
                            <img src={char.image} alt={char.name}/>
                        </div>
                        <div className='description'>
                            <p>{char.name}</p>
                            <span className='status'><span className='status__icon'></span>{char.status} - {char.species}</span>
                            <p className='text-gray'>Last known location:</p>
                        </div>
                        
                    </div>
                  </div>
             </div>
            
        </div>
    );

    }

export default Detail;