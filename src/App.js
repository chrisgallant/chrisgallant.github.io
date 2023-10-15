import "./App.scss";
import SidebarWithHeader from "./components/sidebar";
import { ArtPage } from "./components/art-page";
import { Routes, Route } from "react-router-dom";
import { Thumbnails } from "./components/thumbnails";
import { art} from './art'

function App() {
  return (
    <>
      <SidebarWithHeader>
        <main>
          <Routes>
            <Route path="/" element={<Thumbnails art={art} />} />
            {art.map((artwork) => (
              <Route
                path={artwork.title}
                element={<ArtPage {...artwork} />}
                key={artwork.title}
              />
            ))}
          </Routes>
        </main>
      </SidebarWithHeader>
    </>
  );
}

export default App;
