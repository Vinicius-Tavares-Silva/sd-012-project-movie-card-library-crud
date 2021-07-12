import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovieId();
  }

  handleSubmit(updatedMovie) {
    this.setState({ status: 'loading' },
      async () => {
        await movieAPI.updateMovie(updatedMovie);
        this.setState({
          movie: updatedMovie,
          status: false,
          shouldRedirect: true,
        });
      });
  }

  async fetchMovieId() {
    const { match: { params: { id } } } = this.props;
    this.setState({ status: 'loading' },
      async () => {
        const movie = await movieAPI.getMovie(id);
        console.log(movie);
        this.setState({
          movie,
          status: false,
        });
      });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
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
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
