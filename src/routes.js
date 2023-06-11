import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"; // Switch changed to Routes in v6
const CounterPage = lazy(() => import("./views/CounterPage"));
const DisplayPage = lazy(() => import("./views/DisplayPage"));
export default (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route exact path="/" Component={CounterPage} />
                <Route path="/counter" Component={CounterPage} />
                <Route path="/display/:counter" Component={DisplayPage} />
            </Routes>
        </Suspense>
    </BrowserRouter>
)
