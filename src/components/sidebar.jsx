import React, { useContext } from 'react'

import Navigation from './navigation'
import { PageContext } from '../context/page'
import { uuidv4, add } from '../utils'

const Sidebar = () => {
    const { sidebar } = useContext(PageContext);
    const [pages, setPages] = sidebar;

    const addNewPage = () => {
        const page = {
            id: uuidv4(),
            title: '✍️ Untitled masterpiece',
            content: {
                blocks: [],
            },
            children: []
        };
        
        add(page);
        setPages([
            ...pages,
            page
        ]);
    };

    return (
        <aside>
            <div className="logo">
                <img src="img/logo.png" />
                <span>Notlify</span>
            </div>
            <Navigation pages={pages} level={1} />
            <button onClick={() => addNewPage()}>+ New Page</button>
        </aside>
    );
};

export default Sidebar;