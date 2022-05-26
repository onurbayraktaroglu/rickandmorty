import './App.scss';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            episode: [],
            character: [],
            isLoaded: false
        }

    }

    componentDidMount() {

      fetch('https://rickandmortyapi.com/api/episode')
            .then(res => res.json())
            .then(json => {
                this.setState({
                  episode: json.results,
                  isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });
        
      fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(json => {
                this.setState({
                  character: json.results,
                  isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }
    
    render() {

        const { isLoaded, character } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className='App'>
                <div className='container'>
                  <div className='row'>
                    {character.map(item => (
                        <div key={item.id} className='col-lg-4 col-md-4 col-sm-6 product-box'>
                          <div className='left'>
                            <img src={item.image} alt={item.name}/>
                          </div>
                          <div className='right'>
                            <div className='section'>
                              <a href={item.url}>
                                <h2>{item.name}</h2>
                              </a>
                              <span className='status'><span className='status__icon'></span>{item.status} - {item.species}</span>
                            </div>
                            <div className='section'>
                              <p className='text-gray'>Last known location:</p>
                              <span>{item.location.name}</span>
                            </div>
                            <div className='section'>
                            <p className='text-gray'>First seen in:</p>
                            </div>
                            
                          </div>
                        </div>
                        
                    ))}
                  </div>
                </div>
            </div>
        );

    }

}

export default App;