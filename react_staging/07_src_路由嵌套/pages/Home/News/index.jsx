import React, {Component} from 'react';
import PropTypes from 'prop-types';

class News extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>news001</li>
          <li>news002</li>
          <li>news003</li>
        </ul>
      </div>
    );
  }
}

News.propTypes = {};

export default News;
