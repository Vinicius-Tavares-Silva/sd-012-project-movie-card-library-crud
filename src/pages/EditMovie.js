import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getInfo: 0,
      movie: {},
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    getMovie(id).then((mObj) => this.setState({ movie: { ...mObj }, getInfo: 1 }));
  }

  handleSubmit = (updatedMovie) => {
    updateMovie(updatedMovie).then(this.setState({ getInfo: 2 }));
  }

  callLoading = () => <Loading />

  showMovieForms = () => {
    const { movie } = this.state;
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }

  goMovieList = () => <Redirect to="/" />

  render() {
    const { getInfo } = this.state;
    const { callLoading, showMovieForms, goMovieList } = this;
    const doObject = {
      0: callLoading(),
      1: showMovieForms(),
      2: goMovieList(),
    };
    return doObject[getInfo];
  }
}

export default EditMovie;
