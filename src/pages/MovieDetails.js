import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import '../App.css';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => this.setState({
      movie,
    }, () => this.setState({
      loading: false,
    })));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie: { title, storyline, imagePath,
      genre, rating, subtitle, id }, loading } = this.state;
    const wait = (loading ? <Loading /> : (
      <div>
        <h2>{`Title: ${title}`}</h2>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="linkDetails">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>

    ));

    return (
      <div data-testid="movie-details">
        {wait}
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.arrayOf.isRequired,
};
