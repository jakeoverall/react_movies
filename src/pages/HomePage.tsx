import { useEffect } from "react";
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { moviesService } from '../services/MoviesSerice';
import { AppState } from '../AppState';
import { observer } from 'mobx-react';
import MovieList from '../components/MovieList';
import Modal from '../components/Modal';
import MovieDetails from '../components/MovieDetails';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

function HomePage() {

  async function getMovies() {
    try {
      await moviesService.discoverMovies()
    } catch (e) {
      logger.error(e)
      Pop.error(e as Error, 'Get Movies')
    }
  }

  // NOTE pretty much a onMounted
  useEffect(() => {
    getMovies()
  }, [])

  const MovieModalContent = () => (
    // NOTE this is a tiny local component that prevents needing to use .? everywhere in the details
    AppState.activeMovie ?
      <MovieDetails movie={AppState.activeMovie} />
      :
      <></>
  )

  return (
    <div className="home-page">
      <div className="container">
        <div className="row my-4">
          <SearchBar />
          <Pagination />
        </div>
        <div className="row">
          <MovieList movies={AppState.movies} />
        </div>
      </div>

      <Modal id='movieModal' title={AppState.activeMovie?.title || ''}>
        <MovieModalContent />
      </Modal>

    </div>
  )
}

export default observer(HomePage)