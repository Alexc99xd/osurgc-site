

function NavBar() {

    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">The Ohio State Univeristy Rhythm Games Club</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">OSURGC Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About OSURGC</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Links
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Arcade Guide</a></li>
                  <li><a className="dropdown-item" href="https://www.redbubble.com/people/rhythmgamesclub/shop">Redbubble Shop</a></li>
                  <li><a className="dropdown-item" href="https://discord.gg/K4wwhP5JQp">Discord Link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

  
  export default NavBar