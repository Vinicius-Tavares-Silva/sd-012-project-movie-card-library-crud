import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoaded: false,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((response) => this.setState({
        movie: response,
        isLoaded: true,
      }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => this.setState({
        shouldRedirect: true,
      }));
  }

  render() {
    const { isLoaded, shouldRedirect, movie } = this.state;
    if (!isLoaded) {
      return <Loading />;
    }

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
