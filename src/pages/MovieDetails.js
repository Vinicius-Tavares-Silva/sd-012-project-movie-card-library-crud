import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: [],
    };
  }

  componentDidMount() {
    this.getingDetailsFetch();
  }

  async getingDetailsFetch() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState(
      { loading: true },
      async () => {
        const detailsFetch = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: detailsFetch,
        });
      },
    );
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
