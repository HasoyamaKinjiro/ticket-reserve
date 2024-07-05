import styled from 'styled-components';

const Layout = styled('div')({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
});

const Main = styled('main')({
    flex: 1
});

export {
    Layout,
    Main
}
