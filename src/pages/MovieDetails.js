import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
      loading: true,
    };
    this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { getMovie } = movieAPI;
    const { id } = match.params;
    this.setState({
      loading: true,
    }, async () => {
      const movie = await getMovie(id).then((resolve) => resolve);
      this.setState({
        movie,
        loading: false,
      });
    });
  }

  async removeMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const { deleteMovie } = movieAPI;
    await deleteMovie(id);
  }

  renderMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ `Title: ${title}` }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.removeMovie }>DELETAR</Link>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading } = this.state;
    return (
      loading ? <Loading /> : this.renderMovie()
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
