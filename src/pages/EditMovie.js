import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import * as movieAPI from '../services/movieAPI';
import { Loading, MovieForm } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.movieUpdate();
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    const status = await updateMovie(updatedMovie);
    if (status === 'OK') {
      this.setState({ shouldRedirect: true });
    }
  }

  async movieUpdate() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const getMovieId = await getMovie(id);
    this.setState({
      movie: getMovieId,
      status: 'loaded',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
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
  match: PropTypes.objectOf(Object).isRequired,
};
export default EditMovie;
