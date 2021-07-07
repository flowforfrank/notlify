import React, { useState, useEffect } from 'react'

import Sidebar from './components/sidebar'
import Page from './components/page'

import { PageProvider } from './context/page'
import useFetch from './hooks/useFetch'

const App = () => {
    const [data, loading] = useFetch('http://localhost:3000/pages');
    const [pages, setPages] = useState(data);
    const [activePage, setActivePage] = useState(data);

    useEffect(() => {
        if (data) {
            setPages(data);
            setActivePage(data[0]);
        }
    }, [data]);

    if (loading || !data) {
        return <div>loading...</div>
    }

    const context = {
        sidebar: [pages, setPages],
        page: [activePage, setActivePage]
    };

    return (
        <PageProvider value={context}>
            <Sidebar />
            {activePage && <Page />}
        </PageProvider>
    );
};

export default App;