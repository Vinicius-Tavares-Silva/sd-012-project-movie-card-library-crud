import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Proptypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getMovieDetails();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async getMovieDetails() {
    const { match } = this.props;
    const { id } = match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    // Redirect

    if (loading) return <Loading />;
    // render Loading

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string,
    }),
  }).isRequired,
};
