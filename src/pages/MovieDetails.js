import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: true,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id)
      .then((result) => this.setState({ movie: result, loading: false }));
  }

  handleDelete() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match } = this.props;
    const { id } = match.params;

    if (loading) {
      return <Loading />;
    }

    return (
      <div className="container">
        <div className="card" data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p className="card-body">{ `Subtitle: ${subtitle}` }</p>
          <p className="card-body">{ `Storyline: ${storyline}` }</p>
          <p className="card-body">{ `Genre: ${genre}` }</p>
          <p className="card-body">{ `Rating: ${rating}` }</p>
          <nav className="card-footer">
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
            <Link to="/" onClick={ this.handleDelete }>DELETAR</Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = ({
  match: PropTypes.arrayOf,
}).isRequired;
