import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

export default class MovieDetails extends Component {

  constructor(props) {
    super();

    this.state = {
      loading: true,
      movie: {},
      id: props.id,
    };
    this.loadMovieDetails = this.loadMovieDetails.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    movieAPI.getMovie(id)
      .then((res) => { console.log(res);
        this.setState({
          loading: false,
          movie: res,
        });
      })
      .catch(() => {this.setState({
        loading: 'Erro ao carregar',
      })})
  }

  loadMovieDetails() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  render() {
    return (
      this.state.loading ? <Loading /> : this.loadMovieDetails()
    );
  }
}