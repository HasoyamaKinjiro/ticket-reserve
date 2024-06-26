import reservationMovieReducer, {
    ReservationMovieAction,
    ReservationMovieState,
    setMovie,
    setPopUpIsOpen, setPopUpTime
} from '../../redux/ducks/reservationMovie';
import { Movie } from '../../types';

describe('reservationMovieReducer', () => {
    const initialState: ReservationMovieState = {
        movie: null,
        popUpIsOpen: false,
        popUpTime: ''
    };

    it('should return the initial state', () => {
        expect(reservationMovieReducer(undefined, {} as ReservationMovieAction)).toEqual(initialState);
    });

    it('should handle SET_MOVIE', () => {
        const mockMovie: Movie = {
            "title": "Fight Club",
            "genre": "Drama",
            "duration": 139,
            "releaseDate": "1999-10-15",
            "rating": 8.8,
            "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
            "posterUrl": "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
        };
        const action: ReservationMovieAction = setMovie(mockMovie);

        expect(reservationMovieReducer(initialState, action)).toEqual({
            ...initialState,
            movie: mockMovie
        });
    });

    it('should handle SET_POPUP_IS_OPEN', () => {
        const action: ReservationMovieAction = setPopUpIsOpen(true);

        expect(reservationMovieReducer(initialState, action)).toEqual({
            ...initialState,
            popUpIsOpen: true
        });
    });

    it('should handle SET_POPUP_TIME', () => {
        const mockTime = '10:00';
        const action: ReservationMovieAction = setPopUpTime(mockTime);

        expect(reservationMovieReducer(initialState, action)).toEqual({
            ...initialState,
            popUpTime: mockTime
        });
    });
});
