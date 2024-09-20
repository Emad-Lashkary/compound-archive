import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Gallery from "./pages/Gallery";
import Vocabs from "./pages/Vocabs";
import Musics from "./pages/Musics";
import Settings from "./pages/Settings";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Phrases from "./pages/Phrases";
import Movies from "./pages/Movies";
import Biography from "./pages/Biography";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <HashRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="biography" element={<Biography />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="Phrases" element={<Phrases />} />
            <Route path="vocabs" element={<Vocabs />} />
            <Route path="musics" element={<Musics />} />
            <Route path="movies" element={<Movies />} />
            <Route path="Settings" element={<Settings />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#f7fee7",
            color: "#365314",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
// iYqxBZlrSVWy2OfT
