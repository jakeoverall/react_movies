import { AppState } from '../AppState';
import { moviesService } from '../services/MoviesSerice';
import Pop from '../utils/Pop';

export default function Pagination() {

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


  return (
    <div className='d-flex align-items-center justify-content-between'>
      <button className='btn' disabled={AppState.currentPage == 1} onClick={() => go(-1)}>Previous</button>
      <span>page {AppState.currentPage} of {AppState.totalPages}</span>
      <button className='btn' disabled={AppState.currentPage == AppState.totalPages} onClick={() => go(1)}>Next</button>
    </div>
  )

}