import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: 'NOT OK',
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    const requestUpdate = await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: requestUpdate });
  }

  async fetchMovie() {
    const id = window.location.pathname.split('/')[2];
    const requestMovie = await movieAPI.getMovie(id);
    this.setState({
      status: 'loaded',
      movie: requestMovie,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === 'OK') {
      return (
        <Redirect to="/" />
      );
    }

    if (status === 'loading') {
      return (
        <div data-testid="edit-movie">
          <Loading />
        </div>
      );
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
