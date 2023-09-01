import { useContext } from 'react';
import BooksContext from '../context/books';

function useBooksContext() {            //custom hook
    return useContext(BooksContext);
}

export default useBooksContext;