import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const getMovie = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: getMovie,
        });
      },
    );
  }

  render() {
   
    const { movie:
      { title, storyline, imagePath, genre, rating, subtitle, id },
    } = this.state;
    const { loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;