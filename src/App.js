import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
import { Category } from "./pages/category"
import { Recipe } from "./pages/recipe"

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h1>Oй, кажется вы заблудились.</h1>
      <h5>Страница {location.pathname} не существует или она уже не работает</h5>
    </div>
  );
}

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename="/React-SPA-Meal-App">
        <Header/>
        <main className="container content">
          <Routes>
            <Route path="*" element={<NoMatch />}></Route>
            <Route path="/" element={<Home />} />
            <Route path="contact/" element={<Contact />} />
            <Route path="about/" element={<About />} />
            <Route path="category/:name" element={<Category />} />
            <Route path="meal/:id" element={<Recipe />} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
