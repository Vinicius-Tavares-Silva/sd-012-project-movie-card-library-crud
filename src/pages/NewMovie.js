import React from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

export default class NewMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({
      loading: true,
    });
    movieAPI.createMovie(newMovie)
      .then(() => {
        this.setState({
          redirect: true,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loading: 'Erro ao carregar',
        });
      });
  }

  render() {
    const { state: { loading, redirect } } = this;
    if (redirect) return <Redirect to="/" />;
    if (loading) return <Loading />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
