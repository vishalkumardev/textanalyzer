import React from 'react'

function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand fw-semibold" href="/">TextAnalyzer</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-semibold" aria-current="page" href="/">Home</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
           <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="switch"/>
           <label htmlFor="swtich">Enable Dark Mode</label>
         </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar