import { createContext } from 'react'

const PageContext = createContext({});
const PageProvider = PageContext.Provider;

export { PageContext, PageProvider };