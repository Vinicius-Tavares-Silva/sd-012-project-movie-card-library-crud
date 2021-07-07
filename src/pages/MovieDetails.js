import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

export default class MovieDetails extends Component {
  constructor({ match }) {
    super({ match });

    this.state = {
      loading: true,
      movieDetails: {},
      movieId: match.params.id,
    };

    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
  }

  componentDidMount() {
    const { movieId } = this.state;
    // console.log(movieId);
    this.fetchMovieDetails(movieId);
  }

  async fetchMovieDetails(movieId) {
    const response = await movieAPI.getMovie(movieId);
    // console.log(response);
    this.setState({
      loading: false,
      movieDetails: response,
    });
  }

  render() {
    const { loading, movieDetails } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } =
      movieDetails;

    // Change the condition to check the state
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}
