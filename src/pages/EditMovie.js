import React, { Component } from 'react';
import { MovieForm } from '../components';
import Loading from '../components/Loading';
import { getMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchDetails = this.fetchDetails.bind(this);
  }

  handleSubmit(updatedMovie) {
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchDetails(id);
  }

  async fetchDetails(id) {
    const details = await getMovie(id);
    this.setState({
      status: false,
      movie: details,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
