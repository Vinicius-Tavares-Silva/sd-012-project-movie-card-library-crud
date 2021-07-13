import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.getMovieApi();
  }

  // função feita com a ajuda do colega Gabriel Viana!
  async getMovieApi() {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true },
      async () => {
        const movie = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie,
        });
      });
  }

  async deleteMovie() {
    const { movie: { id } } = this.state;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (loading === true) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link
          to="/"
          onClick={ this.deleteMovie }
        >
          DELETAR

        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default MovieDetails;
