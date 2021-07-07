import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movies: '',
      load: true,
    }
    this.handleMovie = this.handleMovie.bind(this);
  }

  componentDidMount() {
   this.handleMovie()
  }

  async handleMovie() {
    const { getMovie } = movieAPI;
    const { id } = this.props.match.params;
    const data = await getMovie(id);
    this.setState({movies: data, load: false })
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movies, load } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;
    return load 
    ? <Loading /> 
    : <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{title}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">Voltar a Home</Link>
      </div>

  }
}

export default MovieDetails;
