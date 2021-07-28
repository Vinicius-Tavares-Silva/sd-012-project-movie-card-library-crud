import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: '',
      shouldRedirect: false,
      movie: {},
    };

    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  handleSubmit(updatedMovie) {
    this.setState(
      { status: 'loading' },
      async () => {
        const updateMovie = await movieAPI.updateMovie(updatedMovie);
        if (updateMovie === 'OK') {
          this.setState({
            status: 'loaded',
            shouldRedirect: true,
          });
        }
      },
    );
  }

  fetchAPI() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { status: 'loading' },
      async () => {
        const getMovie = await movieAPI.getMovie(id);
        this.setState({
          status: 'loaded',
          movie: getMovie,
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
