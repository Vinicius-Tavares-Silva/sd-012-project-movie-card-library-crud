import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class DeleteLink extends React.Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
  }

  delete() {
    const { id } = this.props;
    movieAPI.deleteMovie(id);
  }

  render() {
    return (
      <Link to="/" onClick={ this.delete }>DELETAR</Link>
    );
  }
}

DeleteLink.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DeleteLink;
