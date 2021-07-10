import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
      loading: true,
    }
  }

  async fetchMovie() {
    const { getMovie } = movieAPI;
    const { id } = this.props.match.params
    this.setState({
      loading: true,
    }, async () => {
      const movie = await getMovie(id).then((resolve) => resolve);
      this.setState({
        movie: movie,
        loading: false,
      })
    })
  }

  componentDidMount() {
    this.fetchMovie()
  }

  renderMovie() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ `Title: ${title}` }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to='/'>VOLTAR</Link>
        <Link to={`/movies/${this.props.match.id}/edit`}>EDITAR</Link>
      </div>
    )
  }


  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading } = this.state;
    return (
      <React.Fragment>
        {loading ? <Loading /> : this.renderMovie()}
      </React.Fragment>
    );
  }
}

export default MovieDetails;
