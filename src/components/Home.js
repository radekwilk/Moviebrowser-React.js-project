import { useHistory } from 'react-router-dom'

const Home = ({ searchText, setSearchText }) => {
  const history = useHistory()
  const updateSearchText = () => {
    const $search = document.getElementById('search-input')
    history.push('/search')
    setSearchText($search.value)
  }

  return (
    <div>
      <div className='home-bg'>
        <div className='home-banner'>
          <h1 className='home-banner-heading display-1 mb-5'>
            Welcome in our Movie Club
          </h1>
          <h2 className='home-banner-title display-6 mb-4'>
            You can find unlimited movie titles in our library.
          </h2>
          <p className='lead mb-2'>
            Enter your movie title. Give it a go on below.
          </p>
          <form className='d-flex flex-column flex-sm-row'>
            <input
              className='form-control me-2 w-100 w-sm-50 mb-2 mb-sm-0'
              type='search'
              id='search-input'
              placeholder='Search'
              aria-label='Search'
              // value={searchText}
            />
            <button
              className='btn btn-outline-danger'
              type='button'
              onClick={updateSearchText}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
