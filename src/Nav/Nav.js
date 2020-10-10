import React from 'react';
import {Link} from 'react-router-dom'
function Nav() {
  return(
    <div>
      <ul>
        <Link >FOR SALE</Link>
        <Link >Gallery</Link>
        <Link >Projects</Link>
        <Link >About Me</Link>
      </ul>
    </div>
  )
}

export default Nav