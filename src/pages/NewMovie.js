import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      shouldRedirect: false,
    };
  }

  handleSubmit = (newMovie) => {
    const { createMovie } = movieAPI;
    createMovie(newMovie);
    this.setState({
      movie: newMovie,
      shouldRedirect: true,
    });
  }

  async newFetch() {
    const { match: { params: { id } } } = this.props;
    const { createMovie } = movieAPI;
    const fetchNew = await createMovie(id);
    this.setState({
      movie: fetchNew,
      shouldRedirect: false,
    });
  }

  render() {
    const { movie, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

NewMovie.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default NewMovie;
