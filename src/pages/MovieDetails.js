import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import movies from '../services/movieData';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesId: {},
      isFetching: true,
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovies(id);
  }

  async fetchMovies(moviesId) {
    const { getMovies } = movieAPI;
    const response = await getMovies(moviesId);
    this.setState({
      moviesId: response,
      isFetching: false,
    });
  }

  render() {
    const { moviesId, isFetching } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = moviesId;

    if (isFetching) return <Loading />;
    return (
      <div data-testid="movie-details">
        {/* { console.log(moviesId) }
        { console.log(title) } */}
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
