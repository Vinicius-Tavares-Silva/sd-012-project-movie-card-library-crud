import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

export default class EditMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      redirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { props: { match: { params: { id } } } } = this;
    movieAPI.getMovie(id)
      .then((res) => {
        this.setState({
          movie: res,
          loading: false,
        });
      })
      .catch(console.log);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => {
        this.setState({
          redirect: true,
        });
      })
      .catch(console.log);
  }

  render() {
    const { state: { loading, redirect, movie } } = this;
    if (redirect) return <Redirect to="/" />;
    if (loading) return <Loading />;
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
    }),
  }).isRequired,
};
