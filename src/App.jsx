import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./pages/detail";
import Main from "./pages/main";

function App() {
  const [account, setAccount] = useState("");

  return (
    <BrowserRouter>
      <div className="bg-gray-950 min-h-screen text-white">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main account={account} />} />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
