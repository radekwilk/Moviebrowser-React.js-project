import { useHistory, Link } from 'react-router-dom'
import Logo from '../img/logo-img.jpg'

const Navbar = ({ searchText, setSearchText }) => {
  const history = useHistory()
  const updateSearchText = (e) => {
    history.push('/search')
    setSearchText(e.target.value)
  }

  function UseBtn() {
    const navSearchInput = document.getElementById('nav-search-input').value

    setSearchText(navSearchInput)
    console.log('My search text is', searchText)
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img src={Logo} alt='Logo' width='50' height='50' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link disabled'
                to='/'
                tabIndex='-1'
                aria-disabled='true'
              >
                Coming soon
              </Link>
            </li>
          </ul>
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              id='nav-search-input'
              placeholder='Search'
              aria-label='Search'
              value={searchText}
              onChange={updateSearchText}
            />
            <button
              className='btn btn-outline-success'
              type='button'
              onClick={UseBtn}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
