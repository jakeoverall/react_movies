import { useEffect, useState } from "react";
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { moviesService } from '../services/MoviesSerice';
import { AppState } from '../AppState';
import { observer } from 'mobx-react';



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
    setTimeout(() => {
      getMovies()
    }, 1500)
  }, [])


  return (
    <div className="home-page">

      {/* <pre><code>{JSON.stringify(AppState.movies, null, 2)}</code></pre> */}

    </div>
  )
}

export default observer(HomePage)