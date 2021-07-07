import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
      loading: true,
      redirect: false,
    };
  }

  componentDidMount() {
    // https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/116/commits/a08fa4556b3b574a4770a58b1aa52bccf5115641
    // https://scotch.io/courses/using-react-router-4/route-params
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((result) => this.setState({
      movie: result,
      loading: false,
    }));
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id).then(() => this.setState({ redirect: true }));
  }

  render() {
    const { movie, loading, redirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (loading) {
      return <Loading />;
    }
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link onClick={ this.handleDelete } to="/">DELETAR</Link>
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
