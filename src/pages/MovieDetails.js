import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((response) => this.setState({
        movie: response,
        loading: false,
      }));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie:
      { title, storyline, imagePath, genre, rating, subtitle, id },
    loading } = this.state;
    // const { movie, loading } = this.state;

    return (
      loading ? (
        <Loading />
      ) : (
        <div data-testid="movie-details">
          <p>{ `Title: ${title}` }</p>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <nav>
            <ul>
              <li>
                <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              </li>
              <li>
                <Link to="/">VOLTAR</Link>
              </li>
            </ul>
          </nav>
        </div>
      ));
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
