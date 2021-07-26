import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reverse: false,
      movie: {},
      flag: 'wait',
    };
  }
  // this.handleSubmit = this.handleSubmit.bind(this);

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const number = +id;
    movieAPI.getMovie(number).then((data) => {
      this.setState({
        flag: 'full',
        movie: data,
      });
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then((data) => {
        this.setState({ reverse: data });
        const { movie } = this.state;
        console.log(movie);
      });
  }

  render() {
    const { flag, reverse, movie } = this.state;
    // linhas baixo
    if (reverse) {
      return <Redirect to="/" />;
    }
    if (flag === 'wait') {
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
