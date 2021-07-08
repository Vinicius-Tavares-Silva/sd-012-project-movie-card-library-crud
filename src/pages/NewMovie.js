import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = { submitted: false };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({ submitted: true });
  }

  renderMovieEdit() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }

  render() {
    const { submitted } = this.state;
    const editPage = this.renderMovieEdit();
    const homePage = <Redirect to="/" />;
    return (
      <div>
        { submitted ? homePage : editPage }
      </div>
    );
  }
}
export default NewMovie;
