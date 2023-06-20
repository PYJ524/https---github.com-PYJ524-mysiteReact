import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './component/main/Main';
import AddList from './component/guestbook/AddList';
import NotFound from './component/error/NotFound';
import Delete from './component/guestbook/Delete';





function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/guestbook/addList" element={<AddList/>} />
                <Route path="/NotFound" element={<NotFound/>} />
                <Route path="/guestbook/delete" element={<Delete/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
