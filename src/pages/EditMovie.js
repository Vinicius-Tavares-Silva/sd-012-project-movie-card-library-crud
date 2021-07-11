import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
// Requisito 5 feito com a instrução do colega de turma Caio Vinicius Jorge Morato em chamada no zoom.

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      shouldRedirect: false,
      status: 'loading',
    };
  }

  componentDidMount() {
    this.editFetch();
  }

  handleSubmit = (updatedMovie) => {
    const { updateMovie } = movieAPI;
    updateMovie(updatedMovie);
    this.setState({
      movie: updateMovie,
      shouldRedirect: true,
    });
  }

  async editFetch() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const fetchEdit = await getMovie(id);
    this.setState({
      movie: fetchEdit,
      status: 'loaded',
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
  match: PropTypes.objectOf(Object).isRequired,
};

export default EditMovie;
