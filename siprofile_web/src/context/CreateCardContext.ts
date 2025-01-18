import { createContext } from 'react';
import { CreateCardContextType } from '../types';

const CreateCardContext = createContext<CreateCardContextType | undefined>(undefined);

export default CreateCardContext;
