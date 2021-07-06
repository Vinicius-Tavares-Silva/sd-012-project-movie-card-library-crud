import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => this.setState({
      movies: response,
      loading: false,
    }));
  }

  render() {
    // Change the condition to check the state
    if (true) return <Loading />;

    const { storyline, imagePath, genre, rating, subtitle } = {};
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}


export default MovieDetails;
