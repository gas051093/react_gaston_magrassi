import NavBar from './components/NavBar';
import ContainerItemList from './components/ContainerItemList/ContainerItemList'
import ContainerItemDetail from './components/ContainerItemDetail/ContainerItemDetail'
import ContainerCartList from './components/CartItemList/ContainerCartList';
import {Routes, Route, BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ContainerItemList />} />
        <Route path="/category/:catName" element={<ContainerItemList />} />
        <Route path="/item/:itemId" element={<ContainerItemDetail />} />
        <Route path= "/cart" element={<ContainerCartList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
