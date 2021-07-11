import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };

    this.getingDetailsFetch = this.getingDetailsFetch.bind(this);
  }

  componentDidMount() {
    this.getingDetailsFetch();
  }

  async getingDetailsFetch() {
    const { match: { params: { id } } } = this.props;
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

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div>
        { loading ? (
          <Loading />
        ) : (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <div>
              <h4>{ `Title: ${title}` }</h4>
              <h5>{ `Subtitle: ${subtitle}` }</h5>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
            </div>
            <div>
              <p>{ `Rating: ${rating}` }</p>
            </div>
            <div>
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              <Link to="/" onClick={ this.removeMovie }>DELETAR</Link>
              <Link to="/">VOLTAR</Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default MovieDetails;
