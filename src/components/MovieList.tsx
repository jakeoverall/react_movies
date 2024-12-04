import { Movie } from '../models/Movie';
import MovieCard from './MovieCard';

type MovieListProps = {
  movies: Movie[]
}

function MovieList({ movies }: MovieListProps) {

  return movies.map(m =>
    <div className='col-md-3 mb-4' key={m.id}>
      <MovieCard movie={m} />
    </div>
  )

}

export default MovieList