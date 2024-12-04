import { Movie } from '../models/Movie';
import MovieCard from './MovieCard';

type MovieListProps = {
  movies: Movie[]
}

function MovieList({ movies }: MovieListProps) {

  return movies.map(m =>
    <div className='col-md-3 mb-4'>
      <MovieCard key={m.id} movie={m} />
    </div>
  )

}

export default MovieList