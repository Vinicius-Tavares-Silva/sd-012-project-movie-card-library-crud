import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
// import { updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      shouldRedirect: false,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => this.setState({
        loading: false,
        shouldRedirect: true,
      }));
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({
      loading: true,
    });
    const movie = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie,
    });
  }

  renderForm() {
    const { movie } = this.state;
    return (
      <div data-testid="edit-movie">
        <MovieForm
          movie={ movie }
          onSubmit={ this.handleSubmit }
        />
      </div>
    );
  }

  render() {
    const { loading, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return (
        <div>
          <Redirect to="/" />
        </div>
      );
    }

    if (loading) {
      return (
        <Loading />
      );
    }
    if (loading === false && shouldRedirect === false) {
      return (
        <section>
          { this.renderForm() }
        </section>
      );
    }
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditMovie;
