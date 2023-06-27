import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';


let App=()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route path='home' index element={<Home />}></Route>
                        <Route></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;