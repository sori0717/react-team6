import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import FindConsonant from './pages/sumi/FindConsonant/FindConsonant'
import FindWord from './pages/sumi/FindWord/FindWord'

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import "./App.css";
import Mart from './pages/seongyu/component/Mart';
import TextImageProblem from './pages/mingi/Components/TextImageProblem';
import MathProblem from './pages/mingi/Components/MathProblem';
import Butcher from './pages/seongyu/component/Butcher';
import FindConsonant2 from './pages/kichan/FindConsonant/FindConsonant';

function App() {
  const [name, setName] = useState("");

  return (
    <DndProvider backend={HTML5Backend}>
      <Routes>
          <Route path="/" element={<Home name={name} setName={setName}/>}>
          <Route path="/seongyu" element={<Butcher/>} />
          <Route path="/seongyu/2" element={<Mart/>} />

          <Route path="/sumi" element={<FindConsonant />} />
          <Route path="/sumi/2" element={<FindWord />} />

          <Route path="/kichan" element={<FindConsonant2 />} />

          <Route path="/mingi" element={<TextImageProblem />} />
          <Route path="/mingi/2" element={<MathProblem />} />
          </Route>
      </Routes>
      </DndProvider>
  );
}

export default App;