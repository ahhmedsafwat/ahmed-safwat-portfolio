import { useLocation, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import CustomCursor from "./lib/cursor/cursor";
import { AnimatePresence } from "framer-motion";
import { Projects, Home } from "./pages";
import { ReactLenis } from "lenis/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Footer from "./components/footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});
const App = () => {
  const location = useLocation();
  const lenisOptions = {
    lerp: 0.5,
    duration: 1.5,
    smoothTouch: true, //smooth scroll for touch devices
    smooth: true,
  };
  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      <ReactLenis root options={lenisOptions}>
        <AnimatePresence mode="wait">
          <Header />
          <SpeedInsights />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Projects />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/:title" element={<Projects />}></Route>
          </Routes>
        </AnimatePresence>
        <Footer />
      </ReactLenis>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
