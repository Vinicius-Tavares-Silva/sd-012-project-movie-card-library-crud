import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMovie = this.handleMovie.bind(this);
  }

  componentDidMount() {
    this.handleState1();
  }

  handleSubmit(updatedMovie) {
    this.handleMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  handleState1 = async () => {
    const { match: { params: { id } } } = this.props;

    const getFunction1 = await movieAPI.getMovie(id);
    this.setState({
      movie: { ...getFunction1 },
      isLoading: false,
    });
  }

  handleMovie = async (updatedMovie) => {
    await movieAPI.updateMovie(updatedMovie);
  }

  render() {
    const { shouldRedirect, movie, isLoading } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};
