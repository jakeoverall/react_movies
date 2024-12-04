import { Movie } from '../models/Movie';

export default function MovieDetails({ movie }: { movie: Movie }) {

  return (
  <div className="row ">
      <div className="col-12 movie-backdrop" style={{ backgroundImage: movie.backdropImgUrl }}>
        <img src={movie.posterImgUrl} alt={movie.title} />
      </div>
      <div className="col-12 movie-details">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{movie.title}</h2>
          <div className='d-flex gap-2'>
            <span className='badge border border-dark bg-dark'>Released: {movie.releaseDate.toDateString()}</span>
            <span className='badge border border-dark bg-dark'>Rating: {movie.voteAverage}</span>
          </div>
        </div>
        <p className='lead'>{movie.overview}</p>
      </div>
    </div>
  )

}