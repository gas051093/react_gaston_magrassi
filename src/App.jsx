import NavBar from './components/NavBar/NavBar';
import ContainerItemList from './components/ContainerItemList'
import ContainerItemDetail from './components/ContainerItemDetail'
import ContainerCartList from './components/ContainerCartList';
import Checkout from './components/Checkout/Checkout';
import {Routes, Route, BrowserRouter } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ContainerItemList />} />
        <Route path="/category/:catName" element={<ContainerItemList />} />
        <Route path="/item/:itemId" element={<ContainerItemDetail />} />
        <Route path="/cart" element={<ContainerCartList />} />
        <Route path='/checkout' element={<Checkout/> } />
      </Routes>
    </BrowserRouter>
  );
}
export default App
