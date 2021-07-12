import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.mounted = false; // https://stackoverflow.com/questions/49906437/how-to-cancel-a-fetch-on-componentwillunmount
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.mounted = true;
    movieAPI.getMovie(id).then((response) => { //  // https://stackoverflow.com/questions/49906437/how-to-cancel-a-fetch-on-componentwillunmount
      if (this.mounted) {
        this.loadMovie(response);
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false; // https://stackoverflow.com/questions/49906437/how-to-cancel-a-fetch-on-componentwillunmount
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  loadMovie(movie) {
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) {
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
