import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading, MovieForm } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      shouldRedirect: false,
      status: 'loading',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.editFetch = this.editFetch.bind(this);
  }

  // // COURSE
  // this.setState(
  //   (estadoAnterior) => ({ meuEstado: estadoAnterior }), // Primeiro parâmetro!
  //   () => { /* ... Sua lógica aqui */ } // Segundo parâmetro!
  // )

  componentDidMount() {
    this.editFetch();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState((prevState) => ({
      ...prevState, shouldRedirect: true,
    }));
  }

  async editFetch() {
    const { match: { params: { id } } } = this.props;
    const movieEdit = await movieAPI.getMovie(id);
    this.setState((prevState) => ({
      ...prevState,
      movie: movieEdit,
      status: 'ok',
    }));
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
      id: PropTypes.string,
    }),
  }).isRequired,
};
export default EditMovie;
