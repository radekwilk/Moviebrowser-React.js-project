import Hero from './Hero'
import NoImg from '../img/no-org-pic.jpg'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

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

const MovieView = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=2a80833d11c523750f923952e8e84068&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data)
        setIsLoading(false)
      })
  }, [id])

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text='Loading...' />
    }
    if (movieDetails) {
      // TODO: Do something when there is no poster
      // const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className='container my-5'>
            <div className='row'>
              <div className='col-md-3 poster-container'>
                {checkImg(
                  movieDetails.poster_path,
                  movieDetails.original_title
                )}
              </div>
              <div className='col-md-9'>
                <h2>{movieDetails.original_title}</h2>
                <p className='muted'>{movieDetails.tagline}</p>
                <p className='lead'>{movieDetails.overview}</p>
                <p>
                  Release date: <strong>{movieDetails.release_date}</strong>
                </p>
                <p>
                  Budget: <strong>${movieDetails.budget}</strong>
                </p>
                <p>
                  Rating: <strong>{movieDetails.vote_average}</strong>
                </p>
                <a
                  className='link-secondary'
                  href={movieDetails.homepage}
                  target='_blank'
                  rel='noreferrer'
                >
                  Homepage
                </a>
              </div>
            </div>
          </div>
        </>
      )
    }
  }
  return renderMovieDetails()
}

export default MovieView
