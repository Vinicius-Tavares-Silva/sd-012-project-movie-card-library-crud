import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      movieDetailed: {},
    };
  }

  componentDidMount() {
    this.getMovieDetailed();
  }

  getMovieDetailed() {
    this.setState({
      isLoading: true,
    }, async () => {
      const { match } = this.props;
      const { params } = match;
      const movieDetailed = await movieAPI.getMovie(params.id);
      this.setState({
        isLoading: false,
        movieDetailed,
      });
    });
  }

  movieDetailsFn() {
    const { movieDetailed } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movieDetailed;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${movieDetailed.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    )
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { isLoading } = this.state;

    return (
      <div>
        { isLoading ? <Loading /> : this.movieDetailsFn() }
      </div>
    );
  }
}

export default MovieDetails;
