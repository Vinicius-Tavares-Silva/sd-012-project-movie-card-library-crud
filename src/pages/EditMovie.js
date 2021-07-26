import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: 0,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* handleSubmit(updatedMovie) {
  } */

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.updateMovie(id).then((movie) => this.setState({
      movie,
    }, () => this.setState({
      status: 'load',
    })));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
      return (
        <Loading />
      );
    }
    console.log(movie);

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  id: PropTypes.number.isRequired,
  match: PropTypes.arrayOf.isRequired,
  params: PropTypes.arrayOf.isRequired,
};
