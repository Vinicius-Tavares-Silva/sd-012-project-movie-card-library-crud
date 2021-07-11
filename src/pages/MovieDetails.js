import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
      movieID: '',
    };
  }

  // Para conseguir resolver o problema de desativar funções assincronas no componentDidMount utilizando o componentWillUnmount eu utilizei esse site como referencia:
  // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component

  componentDidMount() {
    this.mouted = true;
    const { match: { params: { id } } } = this.props;

    movieAPI.getMovie(id).then((movie) => {
      if (this.mouted) {
        this.setState({ movie });
        this.setState({ loading: false });
        this.setState({ movieID: id });
      }
    });
  }

  componentWillUnmount() {
    this.mouted = false;
  }

  render() {
    const { movie, loading, movieID } = this.state;
    if (loading) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <section className="details-container" data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <section className="movie-details-section">
          <h2>{ title }</h2>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <section className="link-section">
            <Link className="link" to={ `/movies/${movieID}/edit` }>EDITAR</Link>
            <Link className="link" to="/">VOLTAR</Link>
          </section>
        </section>
      </section>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
