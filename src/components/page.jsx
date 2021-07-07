import React, { useContext, useEffect } from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'

import { PageContext } from '../context/page'
import { update, remove } from '../utils'  

const editorJS = {
    instance: null,

    getInstance(data) {
        if (!this.instance) {
            this.instance = new EditorJS({
                data,
                tools: {
                    header: Header,
                    list: List
                }
            });
        }

        return this.instance;
    }
};

const Page = () => {
    const { page, sidebar } = useContext(PageContext);
    const [activePage, setActivePage] = page;
    const [pages, setPages] = sidebar;
    const editor = editorJS.getInstance(activePage.content);

    useEffect(() => {
        if (activePage.content.blocks.length) {
            editor.render?.(activePage.content);
        }

        return () => {
            editor.clear();
        };
    }, [activePage]);

    const updateHeading = e => {
        setActivePage({
            ...activePage,
            title: e.target.value
        });
    };

    const save = async () => {
        const data = await editor.save();
        const updatePages = pages => pages.map(page => {
            if (page.id === activePage.id) {
                page.content = data;
                page.title = activePage.title;
            }

            return page;
        });

        setPages(updatePages(pages));
        update(activePage);
    };

    const deletePage = () => {
        const filteredPages = pages.filter(page => page.id !== activePage.id);

        setPages(filteredPages);
        setActivePage(pages[0]);
        remove(activePage);
    };

    return (
        <main>
            <div className="controls">
                <input onChange={updateHeading} value={activePage?.title || ""} />

                <img src="img/save.png" onClick={save} />
                {pages[0].id !== activePage.id &&
                    <img src="img/trash.png" onClick={deletePage} />
                }
            </div>
            <div id="editorjs" />
        </main>
    );
};

export default Page;