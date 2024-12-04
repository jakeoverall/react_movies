import { useEffect, useState } from "react";
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { moviesService } from '../services/MoviesSerice';
import { AppState } from '../AppState';
import { observer } from 'mobx-react';
import MovieList from '../components/MovieList';
import Modal from '../components/Modal';
import MovieDetails from '../components/MovieDetails';
import SearchBar from '../components/SearchBar';



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
    // setTimeout(() => {
    getMovies()
    // }, 1500)
  }, [])

  const MovieModalContent = () => (
    // NOTE this is a tiny component that prevents needing to use .? everywhere in the details
    AppState.activeMovie ?
      <MovieDetails movie={AppState.activeMovie} />
      :
      <></>
  )


  async function go(n: number) {
    try {
      AppState.query
        ? await moviesService.changeSearchPage(AppState.currentPage + n, AppState.query)
        : await moviesService.changeDiscoverPage(AppState.currentPage + n)
    }
    catch (error) {
      Pop.error(error as Error);
    }
  }


  function Pagination() {
    return (
      <div className='d-flex align-items-center justify-content-between'>
        <button className='btn' disabled={AppState.currentPage == 1} onClick={() => go(-1)}>Previous</button>
        <span>page {AppState.currentPage} of {AppState.totalPages}</span>
        <button className='btn' disabled={AppState.currentPage == AppState.totalPages} onClick={() => go(1)}>Next</button>
      </div>
    )
  }


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