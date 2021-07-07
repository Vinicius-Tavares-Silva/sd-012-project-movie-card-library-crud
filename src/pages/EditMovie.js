import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';
// import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: 'no',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    getMovie(match.params.id).then((r) => this.setState({
      status: 'loaded',
      movie: r,
    }));
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie);
    this.setState({ shouldRedirect: 'yes' });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === 'yes') {
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

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
