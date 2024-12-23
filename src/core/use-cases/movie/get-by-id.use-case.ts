import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/interfaces/mappers/movie.mapper';
import {MovieDBMovie} from '../../../infrastructure/interfaces/movie-db.responses';
import {FullMovie} from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);

    const fullMovie = MovieMapper.formMovieDBToEntity(movie);

    return fullMovie;
  } catch (error) {
    throw new Error(`Cannot get movie by id: ${movieId}`);
  }
};
