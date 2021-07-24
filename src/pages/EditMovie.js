import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: {},
      shouldRedirect: false,
    };

    this.takeMovie = this.takeMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.takeMovie();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);

    this.setState({
      shouldRedirect: true,
    });
  }

  async takeMovie() {
    const { match: { params: { id } } } = this.props;

    const takingMovie = await movieAPI.getMovie(id);

    this.setState({
      status: '',
      movie: takingMovie,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf({}).isRequired,
};

export default EditMovie;
