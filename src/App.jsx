import { useState } from "react";
import Dasboard from "./Comonents/Dasboard";
import Navbar from "./Comonents/Navbar";
import Layout from "./pages/Layout";
import { Routes, Route } from "react-router-dom";
import NewUser from "./pages/NewUser";
import InstituteInfo from "./pages/InstituteInfo";
import HishabNikash from "./pages/Accounting/HishabNikash";

function App() {
  return (
    <div className="App">
      {/* <NewUser /> */}
      {/* <div>asjalskjf</div> */}

      {/* <HishabNikash /> */}

      <Routes>
        <Route path="/" element={<Dasboard />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/institute-info" element={<InstituteInfo />} />
      </Routes>
    </div>
  );
}

export default App;
