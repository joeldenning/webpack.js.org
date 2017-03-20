import React from 'react';
import Link from '../link/link';

// Imports for Ad Content
import AGLogo from '../../assets/ag-grid-logo.png';
import WebpackIcon from '../../assets/icon-square-small.svg';

export default ({ distanceFromTop, height }) => {
  return (
    <Link 
      className="sponsors"
      to="https://www.ag-grid.com/?utm_source=webpack&utm_medium=banner&utm_campaign=sponsorship"
      style={{
        top: distanceFromTop,
        height: `calc(${height}px - 3em)`
      }}>

      <img src={ AGLogo } />
      <img src={ WebpackIcon } style={{ width: '100px' }} />
      <div style={{ 
        marginTop: '1em',
        fontSize: '2em',
        textAlign: 'center',
        color: '#535353'
      }}>
        ag-grid is proud to partner with webpack
      </div>

    </Link>
  );
};