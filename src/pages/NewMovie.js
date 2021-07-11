import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { movie } = this.state;
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}
export default NewMovie;
