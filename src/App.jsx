
// Full RainCity App (Landing + Mint) — Versace-Level Elegance ✨

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wallet, Twitter, BookOpen, ArrowRight } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center">
      <Link to="/">
        <img src="/RAINCITY-Logo-W.png" alt="RainCity" className="h-12" />
      </Link>
      <nav className="flex gap-4">
        <Link to="/" className="text-white hover:text-[#c60000] font-[Gotham]">Home</Link>
        <Link to="/mint" className="text-white hover:text-[#c60000] font-[Gotham]">Mint</Link>
      </nav>
    </header>
  );
}

function Landing() {
  return (
    <motion.main
      className="min-h-screen bg-black text-white px-6 py-10 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h1 className="text-5xl font-bold mb-4 text-[#c60000] font-[Gotham]">
        🌧️ RainCity Token
      </motion.h1>
      <p className="text-lg text-gray-300 max-w-xl text-center">
        A community-powered token fueling art, freedom, and decentralized creativity.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="https://twitter.com/raincitytoken" target="_blank">
          <Button className="bg-white text-black">
            <Twitter className="w-4 h-4 mr-2" /> Twitter
          </Button>
        </a>
        <a href="/whitepaper.pdf" target="_blank">
          <Button variant="secondary" className="bg-white text-black">
            <BookOpen className="w-4 h-4 mr-2" /> Whitepaper
          </Button>
        </a>
        <Link to="/mint">
          <Button className="bg-[#c60000] hover:bg-[#a50000] text-white">
            Mint NFT <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </motion.main>
  );
}

function Mint() {
  const [minted, setMinted] = useState(false);
  const handleMint = async () => {
    // simulate minting
    setMinted(true);
    setTimeout(() => setMinted(false), 3000);
  };

  return (
    <motion.main
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-4xl font-bold text-[#c60000] mb-4 font-[Gotham]">Mint Your RainCity NFT</h1>
      <p className="text-gray-300 mb-8">100 RAIN required. Connect wallet & mint.</p>
      <Button
        onClick={handleMint}
        className="bg-[#c60000] hover:bg-[#a50000] text-white px-6 py-2 text-lg"
      >
        {minted ? "✅ Minted!" : "Mint Now"}
      </Button>
    </motion.main>
  );
}

export default function RainCityApp() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
      </div>
    </Router>
  );
}
