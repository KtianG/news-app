import * as React from "react";
import { Routes, Route } from "react-router-dom";

import countries from "../data/countries.json";

import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from "./Home/Home";
import { MainContent } from "./MainContent/MainContent";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="country">{countries.map(generateCountryRoutes)}</Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;

function generateCountryRoutes(country: { name: string; id: string }) {
  const { name, id } = country;
  return (
    <Route
      key={id}
      path={name}
      element={<MainContent country={id} name={name} />}
    />
  );
}
