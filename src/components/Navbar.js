import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'




export default function Navbar(props) {
    return (
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>

            </ul>
            {/* <form classNameName="d-flex">
              <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button classNameName="btn btn-outline-danger" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark Mode</label>
            </div>


          </div>
        </div>
      </nav>
    )
}


Navbar.propTypes = { title: PropTypes.string,
                    aboutText: PropTypes.string
                
}

// konsi value pass ki jajaye agar me kuch pass na karu tos
Navbar.defaultProps = { title: "khersdffbg",
                    aboutText: "rfgbdsdsf"
                
}

