import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.setMovie = this.setMovie.bind(this);

    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.setMovie();
  }

  async setMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const result = await movieAPI.getMovie(id);
    this.setState({
      movie: result,
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;

    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <p>MovieDetails</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{`title: ${title}`}</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${movie.id}/edit` }> EDITAR </Link>
        <Link to="/"> VOLTAR </Link>
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default MovieDetails;
