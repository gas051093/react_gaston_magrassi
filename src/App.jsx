import NavBar from './components/NavBar';
import ContainerItemsList from './components/ContainerItemsList/ContainerItemsList'
import {Routes, Route, BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ContainerItemsList />} />
        <Route path="/category/:catName" element={<ContainerItemsList />} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <NavBar/>
    //   <ContainerItemsList />
    // </>
  );
}

export default App
