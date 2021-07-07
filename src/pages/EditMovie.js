import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      load: true,
      submitted: false,
    };
    this.getMovieData = this.getMovieData.bind(this);
    this.renderMovieEdit = this.renderMovieEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getMovieData();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ submitted: true });
  }

  async getMovieData() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      load: false,
    });
  }

  renderMovieEdit() {
    const { movie } = this.state;
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }

  render() {
    const { load, submitted } = this.state;
    const loadingComponent = <Loading />;
    const movieEditComponent = this.renderMovieEdit();
    const editPage = load ? loadingComponent : movieEditComponent;
    const homePage = <Redirect to="/" />;

    return (
      <div>
        { submitted ? homePage : editPage }
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.objectOf(
    PropTypes.object,
  ).isRequired,
};
