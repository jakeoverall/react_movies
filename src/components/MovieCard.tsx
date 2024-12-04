import { AppState } from '../AppState';
import { Movie } from '../models/Movie';

type MovieCardProps = {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {

  function setActive() {
    AppState.activeMovie = movie
  }

  return (
    <div className="MovieCard">
      <div data-bs-toggle="modal" data-bs-target="#movieModal" onClick={setActive}>
        <img className='img-fluid rounded shadow' src={movie.posterImgUrl} alt={movie.title} title={movie.title} />
      </div>
    </div>
  )
}