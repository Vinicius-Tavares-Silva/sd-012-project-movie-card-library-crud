import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      carregando: true,
      redireciona: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editaFilme = this.editaFilme.bind(this);
  }

  componentDidMount() {
    this.editaFilme();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      redireciona: true,
    });
  }

  async editaFilme() {
    const { match: { params: { id } } } = this.props;
    const edicao = await movieAPI.getMovie(id);
    this.setState({
      movie: edicao,
      carregando: false,
    });
  }

  render() {
    const { status, redireciona, movie, carregando } = this.state;
    const { match: { params: { id } } } = this.props;
    if (redireciona) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        {carregando ? <Loading />
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } id={ id } />}
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
