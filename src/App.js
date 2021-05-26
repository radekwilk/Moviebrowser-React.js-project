import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutView from './components/AboutView'
import SearchView from './components/SearchView'
import MovieView from './components/MovieView'
import Page404 from './components/Page404'
import { Switch, Route } from 'react-router-dom'

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')
  const [returnedData, setReturnedData] = useState(false)

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results)

          if (data.results.length > 0) {
            setReturnedData(true)
          } else {
            setReturnedData(false)
          }
        })
    }
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path='/' exact>
          <Home searchText={searchText} setSearchText={setSearchText} />
        </Route>
        <Route path='/about' component={AboutView} />
        <Route path='/search'>
          <SearchView
            keyword={searchText}
            searchResults={searchResults}
            returnedData={returnedData}
          />
        </Route>
        <Route path='/movies/:id' component={MovieView} />
        <Route component={Page404} />
      </Switch>
    </div>
  )
}

export default App
