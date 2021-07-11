import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();
    this.moviesFetchApi = this.moviesFetchApi.bind(this);
    this.state = {
      movie: {},
      loading: true,
    }
  }

  componentDidMount() {
    this.moviesFetchApi();
  }

  async moviesFetchApi() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
      .then((response) => this.setState({
        movie: response,
        loading: false,
      }));
  }

  render() {
    const { 
      movie: {id, title, storyline, imagePath, genre, rating, subtitle},
      loading,
    } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button>
          <Link to='/'>VOLTAR</Link>
        </button>
        <button>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </button>
        <button>
          <Link to=''></Link>
        </button>
      </div>
    );
  }
}

export default MovieDetails;
