import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './component/main/Main';
import AddList from './component/guestbook/AddList';
import NotFound from './component/error/NotFound';
import Delete from './component/guestbook/Delete';

import Counter from './component/study/Counter';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/guestbook/addList" element={<AddList/>} />
                <Route path="/guestbook/delete" element={<Delete/>} />
                <Route path="/*" element={<NotFound/>} />
                
                <Route path="/counter" element={<Counter/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
