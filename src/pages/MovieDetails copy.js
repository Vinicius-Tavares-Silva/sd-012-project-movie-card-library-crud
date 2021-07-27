// import React, { Component } from 'react';

// import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

// class MovieDetails extends Component {
//   constructor() {
//     super();

//     this.state = {
//       movies: [],
//       loading: true,
//     };
//   }

//   componentDidMount() {
//     movieAPI.getMovies()
//       .then((result) => this
//         .setState({
//           loading: false,
//           movies: result,
//         }));
//   }

//   render() {
//     // Change the condition to check the state
//     const { loading } = this.state;
//     if (loading) return <Loading />;

//     const { match } = this.props;
//     const { id } = match.params;

//     const { movies } = this.state;
//     const { storyline, imagePath, genre, rating, subtitle } = movies[id];

//     return (
//       <div data-testid="movie-details">
//         <img alt="Movie Cover" src={ `../${imagePath}` } />
//         <p>{ `Subtitle: ${subtitle}` }</p>
//         <p>{ `Storyline: ${storyline}` }</p>
//         <p>{ `Genre: ${genre}` }</p>
//         <p>{ `Rating: ${rating}` }</p>
//       </div>
//     );
//   }
// }

// export default MovieDetails;
