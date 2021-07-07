import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const { match } = this.props;
    getMovie(match.params.id)
      .then((r) => this.setState(r));
  }

  shouldComponentUpdate() {
    const { title } = this.state;
    if (title === undefined) {
      return <Loading />;
    }
    return this.main();
  }

  linkEdit(id) {
    return (`/movies/${id}/edit`);
  }

  main() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ this.linkEdit(id) }>
          EDITAR
        </Link>
        <Link to="/">
          VOLTAR
        </Link>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;;
    return (
      <div>
        { this.shouldComponentUpdate() }
      </div>
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
