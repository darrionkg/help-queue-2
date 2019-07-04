import React from 'react';
import { Link } from 'react-router-dom';

function Error404(){
  return (
    <div>
      <style jsx>{`
        h2, h3 {
          color: white;
        }
      `}</style>
      <h2>The page you are looking for does not exist!</h2>
      <h3>Would you like to return <Link style={{ color: 'white' }} to="/">home</Link> instead?</h3>
    </div>
  );
}

export default Error404;
