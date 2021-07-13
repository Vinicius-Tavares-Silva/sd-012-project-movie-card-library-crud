import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  // Change the condition to check the state
  // if (true) return <Loading />;
  componentDidMount() {
    this.getMovieApi();
  // movieAPI.getMovie(id).then((resolve) => this.setState({
  //   movie: resolve,
  //   loading: false,
  // }));
  }
  // console.log(this.props.match.params);

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
      </div>
    );
  }
}

export default MovieDetails;
