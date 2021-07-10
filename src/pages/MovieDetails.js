import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getingDetailsFetch();
  }

  async getingDetailsFetch() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const detailsFetch = await getMovie(id);
    this.setState({
      loading: false,
      movie: detailsFetch,
    });
  }

  fetchDetails = () => {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <p><Link to={ `/movies/${id}/edit` }>EDITAR</Link></p>
          <p><Link exact to="/">VOLTAR</Link></p>
        </div>
      </div>

    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        { loading ? <Loading /> : this.fetchDetails() }
      </div>

    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default MovieDetails;
