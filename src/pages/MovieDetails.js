import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    this.setState({ loading: true }, async () => {
      const movie = await getMovie(id);
      this.setState({
        loading: false,
        movie,
      });
      console.log(movie);
    });
  }

  render() {
    // Change the condition to check the state
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    console.log(movie);

    if (loading) return <Loading />;
    return (
      <div className="card" data-testid="movie-details">
        <img className="card-img-top" alt="Movie Cover" src={ `../${imagePath}` } />
        <div className="card-body">
          <h4 className="card-title">{ `Subtitle: ${title}` }</h4>
          <p className="card-text">{ `Subtitle: ${subtitle}` }</p>
          <p className="card-text">{ `Storyline: ${storyline}` }</p>
          <p className="card-text">{ `Genre: ${genre}` }</p>
          <p className="card-text">{ `Rating: ${rating}` }</p>
          <Link to="/" className="btn btn-primary">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` } className="btn btn-primary">EDITAR</Link>
        </div>

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
