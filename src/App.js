import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen"
import {Route, Routes} from 'react-router-dom'

//import usestate. declare input state value
//pass state value to header and homescreen
//pass setstate method to header

function App() {

  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <Header setSearch={setSearch}/>
        <Routes>
          <Route index element={<HomeScreen search={search}/>}/>
          <Route path="newRecipe" element={<NewRecipeScreen/>}/>
          <Route path="recipe/:id" element={<DetailScreen/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
