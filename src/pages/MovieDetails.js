import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.requestId();
  }

  async requestId() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const getMovieId = await getMovie(id);
    console.log(getMovieId);
    this.setState({
      movie: getMovieId,
      loading: false,
    });
  }

  render() {
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}
MovieDetails.propTypes = {
  // Objeto de objetos https://medium.com/@fannyvieira/proptypes-in-react-eb5f9d417fb
  match: PropTypes.objectOf(Object).isRequired,
};
export default MovieDetails;
