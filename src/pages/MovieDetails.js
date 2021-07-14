import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(movieAPI.getMovies())
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            movies: result,
          });
        },
        (error) => {
          this.setState({
            movies: [],
          });
          console.log(error);
        },
      );
  }

  render() {
    const { movies } = this.state;
    const { storyline, imagePath, genre, rating, subtitle } = movies;

    if (movies.length === 0) {
      return <Loading />;
    }

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
