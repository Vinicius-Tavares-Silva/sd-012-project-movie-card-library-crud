import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getIdMovie();
  }

  handleSubmit(updatedMovie) {
    this.setState({
      status: 'loading',
    }, async () => {
      await updateMovie(updatedMovie);
      this.setState({
        movie: updatedMovie,
        status: false,
        shouldRedirect: true,
      });
    });
  }

  async getIdMovie() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({
      status: 'loading',
    }, async () => {
      const movie = await getMovie(id).then((resolve) => resolve);
      this.setState({
        movie,
        status: false,
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect;
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading;
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
