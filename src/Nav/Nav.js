import React from 'react';
import {Link} from 'react-router-dom'
function Nav() {
  return(
    <div className='expand'>
      <i className="fa fa-bars">
      <div className='hidden'>
        <Link >FOR SALE</Link>
        <Link >Gallery</Link>
        <Link >Projects</Link>
        <Link >About Me </Link>
      </div>
      </i>
    </div>
  )
}

export default Nav