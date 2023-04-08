import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import LoadingIndicator from "./components/loaders/LoadingIndicator";
import reloadOnFail from "./utils/reloadOnFail";

const HomePage = lazy(() => reloadOnFail(() => import("./pages/Home")));

const TestPage = lazy(() => reloadOnFail(() => import("./pages/Test")));

export default function App() {
  return (
    <React.StrictMode>
      <Suspense fallback={<LoadingIndicator />}>
        <AppLayout>
          <Suspense fallback={<LoadingIndicator />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/test" element={<TestPage />} />
            </Routes>
          </Suspense>
        </AppLayout>
      </Suspense>
    </React.StrictMode>
  );
}
