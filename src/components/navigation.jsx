import React, { useContext } from 'react'

import { PageContext } from '../context/page'

const Navigation = ({ pages, level }) => {
    const { page } = useContext(PageContext);
    const [activePage, setActivePage] = page;
    const padding = level > 1 ? `${25 + 25 * level}px` : null;

    const toggleOpen = id => document.getElementById(id).classList.toggle('open');

    return (
        <ul>
            {pages?.map(page => (
                <li key={page.id}>
                    <span className={activePage.id === page.id ? 'active' : null}
                        onClick={() => setActivePage(page)}
                        style={{ paddingLeft: padding }}
                    >
                        <img src={`img/chevron-${!!page.children.length ? 'full' : 'empty'}.png`}
                            onClick={() => !!page.children.length ? toggleOpen(page.id) : null}
                        />
                        {page.title}
                    </span>
                    {!!page.children.length && <Navigation pages={page.children} level={level + 1} />}
                </li>
            ))}
        </ul>
    );
};

export default Navigation;