import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      shouldRedirect: false,
    };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    const form = <MovieForm onSubmit={ this.handleSubmit } />;
    return (
      <div data-testid="new-movie">
        { shouldRedirect ? <Redirect to="/" /> : form }
      </div>
    );
  }
}
export default NewMovie;
