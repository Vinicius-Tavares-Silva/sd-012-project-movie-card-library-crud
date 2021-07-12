import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.fetchM = this.fetchM.bind(this);
  }

  componentDidMount() {
    this.fetchM();
  }

  async fetchM() {
    const fetchMovies = await movieAPI.getMovies();
    this.setState({
      movies: fetchMovies,
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;

    const { movies } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;

    return (
      <div data-testid="movie-details">
        <p>{ `title: ${title}` }</p>
        {console.log(movies)}
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieDetails;
