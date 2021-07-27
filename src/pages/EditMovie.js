import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reverse: false,
      movie: {},
      flag: 'wait',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.choiceMovie = this.choiceMovie.bind(this);
  }

  componentDidMount() {
    this.choiceMovie();
  }

  async handleSubmit(renewedMovie) {
    const { updateMovie } = movieAPI;
    await updateMovie(renewedMovie);
    this.setState({ reverse: true });
  }

  async choiceMovie() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const movie = await getMovie(id);
    this.setState({ movie, flag: 'Completed' });
  }

  render() {
    const { flag, reverse, movie } = this.state;
    // linhas baixo
    if (reverse) {
      return <Redirect to="/" />;
    }
    if (flag === 'wait') {
      return <Loading>Carregando...</Loading>;
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
