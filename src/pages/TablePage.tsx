import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    PagingState,
    IntegratedPaging
} from '@devexpress/dx-react-grid';
import {
    Table,
    Grid,
    TableHeaderRow,
    PagingPanel
} from '@devexpress/dx-react-grid-material-ui';
import { Paper, Box } from '@mui/material';

import { boxTable, paperTable } from '../styled/pages/TablePageStyles';
import { State } from '../redux/store';
import { fetchMovies } from '../redux/ducks/movies';

interface Column {
    name: string;
    title: string;
}

const TablePage = () => {
    const [columns] = useState<Column[]>([
        { name: 'title', title: 'Title' },
        { name: 'genre', title: 'Genre' },
        { name: 'duration', title: 'Duration' },
        { name: 'rating', title: 'Rating' }
    ]);
    const dispatch = useDispatch();
    const movies = useSelector((state: State) => state.moviesState.movies);

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch]);

    const [pageSize, setPageSize] = useState<number>(10);

    useEffect(() => {
        const calculatePageSize = () => {
            const windowHeight = window.innerHeight;

            if (windowHeight > 800) {
                return 11;
            } else if (windowHeight > 600) {
                return 8;
            } else if (windowHeight > 400) {
                return 5;
            } else {
                return 3;
            }
        };

        const handleResize = () => {
            const newSize = calculatePageSize();
            setPageSize(newSize);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box sx={boxTable}>
            <Paper
                sx={paperTable}
            >
                <Grid
                    rows={movies}
                    columns={columns}
                >
                    <PagingState
                        defaultCurrentPage={0}
                        pageSize={pageSize}
                    />
                    <IntegratedPaging/>
                    <Table/>
                    <TableHeaderRow/>
                    <PagingPanel/>
                </Grid>
            </Paper>
        </Box>
    );
};

export default TablePage;
