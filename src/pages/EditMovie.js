import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
      shouldRedirect: false,
    };
    this.moviesFetchApi = this.moviesFetchApi.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.moviesFetchApi();
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  // Solução do erro retirada desse link: https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => this.setState({
        loading: false,
        shouldRedirect: true,
      }));
  }

  moviesFetchApi() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id)
      .then((response) => this.setState({
        movie: response,
        loading: false,
      }));
  }

  render() {
    const { loading, movie, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    if (loading) {
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
