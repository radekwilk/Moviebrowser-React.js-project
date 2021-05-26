import Hero from './Hero'
import NoImg from '../img/no-org-pic.jpg'
import { Link } from 'react-router-dom'

const checkImg = (imgName, imgTitle) => {
  if (imgName !== null) {
    const posterUrl = `https://image.tmdb.org/t/p/w500${imgName}`
    return <img src={posterUrl} className='card-img-top' alt={imgTitle} />
  } else {
    return (
      <div>
        <img
          src={NoImg}
          className='card-img-top no-img-card'
          alt='Poster not available for this movie'
        />
        <div className='no-img-info'>
          Poster image for {imgTitle} is not available
        </div>
      </div>
    )
  }
}

const MovieCard = ({ movie }) => {
  // const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  if (movie == null) {
    return <div>No movie</div>
  } else {
    const detailUrl = `/movies/${movie.id}`
    return (
      <div className='col-lg-3 col-md-4 col-sm-6 col-10 mx-sm-0 mx-auto my-2'>
        <div className='card shadow-lg'>
          <div className='card-img-wrapper'>
            {checkImg(movie.poster_path, movie.original_title)}
          </div>
          <div className='card-body'>
            <h5 className='card-title'>{movie.original_title}</h5>
            <Link to={detailUrl} className='btn btn-primary'>
              Show details
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const SearchView = ({ keyword, searchResults, returnedData }) => {
  const title = `You are searching for ${keyword}`

  if (!returnedData) {
    return (
      <div>
        <Hero text={title} />
        <div className='alert-danger my-5 p-3 rounded-2 w-75 mx-auto'>
          No record for <strong>{keyword}</strong> keyword search!
        </div>
      </div>
    )
  } else {
    const resultsHtml = searchResults.map((obj, i) => {
      return <MovieCard movie={obj} key={i} />
    })

    return (
      <div>
        <Hero text={title} />
        {resultsHtml && (
          <div className='container my-4'>
            <div className='row'>{resultsHtml}</div>
          </div>
        )}
      </div>
    )
  }
}

export default SearchView
