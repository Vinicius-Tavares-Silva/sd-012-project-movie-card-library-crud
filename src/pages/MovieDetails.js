import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;

    getMovie(id).then((resolve) => this.setState({
      movie: resolve,
    }));
  }

  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { history: { push } } = this.props;

    if (title === undefined) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <h2>{ `Title: ${title}` }</h2>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button onClick={ () => {
          push('/');
        } }>VOLTAR</button>
        <button onClick={ () => {
          push("/movies/:id/edit");
        } }>EDITAR</button>
      </div>
    );
  }
}

export default MovieDetails;
