import logo from './logo.svg';
import './App.css';
import {Route, Routes,Router, BrowserRouter, Link} from 'react-router-dom'
import Main from "./components/main/Main";
import Header from './components/header/Header';
import Association from './components/association/Association';


function App() {
  const colA={
    a1: "Polje a1",
    a2: "Polje a2",
    a3: "Polje a3",
    a4: "Polje a4",
    a: "Ressnje kolone A",
  }
  const colB={
    b1: "Polje b1",
    b2: "Polje b2",
    b3: "Polje b3",
    b4: "Polje b4",
    b: "Resenje kolone b",

  }
  const colC={
    c1: "Polje c1",
    c2: "Polje c2",
    c3: "Polje c3",
    c4: "Polje c4",
    c: "Resenje kolone c",

  }
  const colD={
    d1: "Polje d1",
    d2: "Polje d2",
    d3: "Polje d3",
    d4: "Polje d4",
    d: "Resenje kolone d",
  }
  return (
    <>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/asocijacija1" element={<Association colA={colA} colB={colB} colC={colC} colD={colD} guess={"pogodak"}></Association>}>
        </Route>
        <Route path="/asocijacija2" element={<Association colA={colA} colB={colB} colC={colC} colD={colD} guess={"pogodak"}></Association>}></Route>
        <Route path="/asocijacija3" element={<Association colA={colA} colB={colB} colC={colC} colD={colD} guess={"pogodak"}></Association>}></Route>
        <Route path="/asocijacija4" element={<Association colA={colA} colB={colB} colC={colC} colD={colD} guess={"pogodak"}></Association>}></Route>
        <Route path="/asocijacija5" element={<Association colA={colA} colB={colB} colC={colC} colD={colD} guess={"pogodak"}></Association>}></Route>
        <Route path="/asocijacija6" element={<Association colA={colA} colB={colB} colC={colC} colD={colD} guess={"pogodak"}></Association>}></Route>
        <Route path="/asocijacija7" element={<Association colA={colA} colB={colB} colC={colC} colD={colD} guess={"pogodak"}></Association>}></Route>
        <Route path="/asocijacija8" element={<Association colA={colA} colB={colB} colC={colC} colD={colD} guess={"pogodak"}></Association>}></Route>
        <Route path="/asocijacija9" element={<Association colA={colA} colB={colB} colC={colC} colD={colD} guess={"pogodak"}></Association>}></Route>
      </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;
