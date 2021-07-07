import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Requisito 5
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    // ou const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((result) => this.setState({ movie: result, status: '' }));
  }

  // Idéia do asyn/await tirada do repositório do colega Roberval, source: https://github.com/tryber/sd-012-project-movie-card-library-crud/tree/roberval-filho-movie-cards-library-crud
  // E de usar a função updateMovie do colega colega Thalles, source: https://github.com/tryber/sd-012-project-movie-card-library-crud/tree/thalles-carneiro-project-movie-card-library-crud
  // função updateMovie no arquivo movieAPI.js

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    // Componente Redirect citado na sessão 'Habilidades' do proejto, documentação: https://reactrouter.com/web/api/Redirect

    if (status === 'loading') return <Loading />;

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
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
