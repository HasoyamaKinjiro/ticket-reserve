import reservationMovieReducer, {
    ReservationMovieAction,
    ReservationMovieState,
    setMovie,
    setPopUpIsOpen, setPopUpTime
} from '../../redux/ducks/reservationMovie';
import { Movie } from '../../types';

describe('reservationMovieReducer duck', () => {
    const initialState: ReservationMovieState = {
        movie: null,
        popUpIsOpen: false,
        popUpTime: ''
    };

    test('should return the initial state', () => {
        expect(reservationMovieReducer(undefined, {} as ReservationMovieAction)).toEqual(initialState);
    });

    test('should set movie', () => {
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

    test('should update popUpIsOpen to true', () => {
        const action: ReservationMovieAction = setPopUpIsOpen(true);

        expect(reservationMovieReducer(initialState, action)).toEqual({
            ...initialState,
            popUpIsOpen: true
        });
    });

    test('should set correct time', () => {
        const mockTime = '10:00';
        const action: ReservationMovieAction = setPopUpTime(mockTime);

        expect(reservationMovieReducer(initialState, action)).toEqual({
            ...initialState,
            popUpTime: mockTime
        });
    });
});
