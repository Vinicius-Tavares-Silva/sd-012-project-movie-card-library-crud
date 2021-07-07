import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {},
      loading: true,
    };
    this.displayDetails = this.displayDetails.bind(this);
  }

  componentDidMount() {
    this.changeStates();
  }

  async changeStates() {
    const { id } = this.props;
    const request = await movieAPI.getMovie(id);
    this.setState({
      movies: request,
      loading: false,
    });
  }

  displayDetails() {
    const { movies } = this.state;
    const { storyline, imagePath, genre, rating, subtitle } = movies;
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

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { loading } = this.state;

    return (
      <div>
        { loading ? <Loading /> : this.displayDetails()}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MovieDetails;
