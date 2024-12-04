import { useState } from 'react';
import { moviesService } from '../services/MoviesSerice';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';

export default function SearchBar() {

  const [searching, setSearching] = useState('')

  function delayedSearch(form: HTMLFormElement) {
    setSearching('searching')
    setTimeout(async () => {
      await moviesService.searchMovies(form.query.value)
      form.reset()
      setSearching('done')
    }, 2500)
  }
  async function fastSearch(form: HTMLFormElement) {
    setSearching('searching')
    await moviesService.searchMovies(form.query.value)
    setSearching('done')
    form.reset()
  }

  async function findMovies() {
    try {
      event?.preventDefault()
      const form = event?.target as HTMLFormElement
      AppState.query = form.query.value
      // delayedSearch(form)
      fastSearch(form)

    }
    catch (error) {
      Pop.error(error as Error);
    }
  }

  function SearchResults() {

    switch (searching) {

      case '':
        return <></>
      case 'searching':
        return <p>finding movies with title {AppState.query}</p>
      case 'done':
        return AppState.movies.length
          ? <p>Found {AppState.totalResults} movies for <kbd className='badge bg-black'>"{AppState.query}"</kbd></p>
          : <p className='alert alert-danger p-0' >No results found for <kbd className='badge bg-dark'>"{AppState.query}"</kbd></p>
    }
  }


  return (
    <form className="SearchBar" onSubmit={findMovies}>
      <div className="input-group mb-2">
        <input className='form-control' type="text" required placeholder='Find a movie' name="query" />
        <button className='btn' type='submit' disabled={searching == 'searching'}>
          <i className={`mdi ${searching == 'searching' ? 'mdi-loading mdi-spin' : 'mdi-magnify'} `}></i>
        </button>
      </div>

      <SearchResults />





    </form>
  )

}