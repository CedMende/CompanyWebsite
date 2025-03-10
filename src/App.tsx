import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/shared/ScrollToTop";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import LoadingSpinner from "./components/shared/LoadingSpinner";
const Home = lazy(() => import(/* webpackChunkName: "home" */"./pages/Home"));
const Services = lazy(() => import(/* webpackChunkName: "services" */"./pages/Services"));
const Portfolio = lazy(() => import(/* webpackChunkName: "portfolio" */"./pages/Portfolio"));
const Blog = lazy(() => import(/* webpackChunkName: "blog" */"./pages/Blog"));
const BlogPost = lazy(() => import(/* webpackChunkName: "blog-post" */"./pages/BlogPost"));
const About = lazy(() => import(/* webpackChunkName: "about" */"./pages/About"));
const Careers = lazy(() => import(/* webpackChunkName: "careers" */"./pages/Careers"));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */"./pages/Contact"));
const RouteChangeTracker = () => {
  const location = useLocation();
  useEffect(() => {
    const page_path = location.pathname + location.search;
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", process.env.REACT_APP_GA_ID || "", {
        page_path
      });
    }
  }, [location]);
  return null;
};
export function App() {
  return <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <RouteChangeTracker />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
                <LoadingSpinner />
              </div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        404 - Page Not Found
                      </h1>
                      <p className="text-gray-600 dark:text-gray-300">
                        The page you are looking for doesn't exist.
                      </p>
                    </div>
                  </div>} />
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>;
}