import { createContext } from 'react';
import { PageHistoryContextType } from '../types';

const PageHistoryContext = createContext<PageHistoryContextType | undefined>(undefined);

export default PageHistoryContext;
