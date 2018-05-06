import React, {Component} from 'react';
import Movie from './movies';
import axios from 'axios';

class MoviesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentWillMount() {
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then((response) => {
            console.log(response);
            this.setState({
                movies: response.data.feed.entry
            })
        });
    }

    render() {
        console.log('The State is:', this.state);
        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movie info={movieInfo} key={index}/>
        });

        return (
            <div>
                {movieList}
            </div>
        )
    }
}

export default MoviesContainer;