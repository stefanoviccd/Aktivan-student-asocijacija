import logo from './logo.svg';
import './App.css';
import {Route, Routes,Router, BrowserRouter, Link} from 'react-router-dom'
import Main from "./components/main/Main";
import Header from './components/header/Header';
import Association from './components/association/Association';


function App() {
  const colA1={
    a1: "Mreža",
    a2: "Istraživanje",
    a3: "1969.",
    a4: "Računar",
    a: "Internet",
  }
  const colB1={
    b1: "Deca",
    b2: "Osmeh",
    b3: "Potkovica",
    b4: "Detelina",
    b: "Sreća",

  }
  const colC1={
    c1: "Loptica",
    c2: "Kamenčić",
    c3: "Kućica",
    c4: "Prstić",
    c: "Deminutiv",

  }
  const colD1={
    d1: "Mafini",
    d2: "Sladoled",
    d3: "Kakao",
    d4: "Bananica",
    d: "Čokolada",
  }


  const colA2={
    a1: "Ljubav",
    a2: "Furija",
    a3: "Ruža",
    a4: "Jabuka",
    a: "Crvena",
  }
  const colB2={
    b1: "Milja",
    b2: "Šuma",
    b3: "Ekologija",
    b4: "WhatsApp",
    b: "Zelena",

  }
  const colC2={
    c1: "Zvezda",
    c2: "Grobnica",
    c3: "Nebo",
    c4: "Orkestar",
    c: "Plava",

  }
  const colD2={
    d1: "Sunce",
    d2: "Limun",
    d3: "Taksi",
    d4: "Pile",
    d: "Žuta",
  }

  const colA3={
    a1: "Sporazum",
    a2: "Imunitet",
    a3: "Pasoš",
    a4: "Odnosi",
    a: "Diplomatski",
  }
  const colB3={
    b1: "Tretman",
    b2: "Dvor",
    b3: "Ljiljan",
    b4: "Pingvin",
    b: "Kraljevski",

  }
  const colC3={
    c1: "Fakultet",
    c2: "Put",
    c3: "Podatak",
    c4: "Policija",
    c: "Bezbednost",

  }
  const colD3={
    d1: "Bežični",
    d2: "Surfovanje",
    d3: "Google",
    d4: "Ruter",
    d: "Internet",
  }


  const colA4={
    a1: "Televizija",
    a2: "Jezik",
    a3: "Instalacija",
    a4: "Kompjuter",
    a: "Program",
  }
  const colB4={
    b1: "Niz",
    b2: "Brojač",
    b3: "Ponavljanje",
    b4: "Ciklus",
    b: "Iteracija",

  }
  const colC4={
    c1: "Železnički",
    c2: "Drumski",
    c3: "Prekršaj",
    c4: "Gužva",
    c: "Saobraćaj",

  }
  const colD4={
    d1: "Čvor",
    d2: "Pertle",
    d3: "Kravata",
    d4: "Mornar",
    d: "Čvor",
  }


  const colA5={
    a1: "Griva",
    a2: "Vino",
    a3: "Dugme",
    a4: "Crno",
    a: "Bela",
  }
  const colB5={
    b1: "Kragujevac",
    b2: "Duga",
    b3: "Brisač",
    b4: "Vreme",
    b: "Kiša",

  }
  const colC5={
    c1: "Otrovna",
    c2: "Stablo",
    c3: "Supa",
    c4: "Kapa",
    c: "Pečurka",

  }
  const colD5={
    d1: "Klijent",
    d2: "Proxy",
    d3: "Veza",
    d4: "Web",
    d: "Server",
  }


  const colA6={
    a1: "Stan",
    a2: "Memorija",
    a3: "Lična karta",
    a4: "Lokacija",
    a: "Adresa",
  }
  const colB6={
    b1: "Vektor",
    b2: "Kretanje",
    b3: "Smer",
    b4: "Put",
    b: "Pravac",

  }
  const colC6={
    c1: "Putnik",
    c2: "Guma",
    c3: "Struja",
    c4: "Trka",
    c: "Automobil",

  }
  const colD6={
    d1: "Kod",
    d2: "Jezik",
    d3: "IT",
    d4: "funkcija",
    d: "Programiranje",
  }
  const colA7={
    a1: "Predlog",
    a2: "Smernica",
    a3: "Naredba",
    a4: "Uputstvo",
    a: "Instrukcija",
  }
  const colB7={
    b1: "Odredba",
    b2: "Zlato",
    b3: "5 sekundi",
    b4: "Pravopis",
    b: "Pravila",

  }
  const colC7={
    c1: "Paradigme",
    c2: "Radio",
    c3: "Jezik",
    c4: "TV",
    c: "Program",

  }
  const colD7={
    d1: "Način",
    d2: "Krivica",
    d3: "Disciplina",
    d4: "Parnica",
    d: "Postupak",
  }
  const colA8={
    a1: "Pretraga",
    a2: "Prodaja",
    a3: "Paket",
    a4: "Protokol",
    a: "Internet",
  }
  const colB8={
    b1: "Prevoz",
    b2: "Nabavka",
    b3: "Objekat",
    b4: "Beležnik",
    b: "Deo",

  }
  const colC8={
    c1: "Pokemon",
    c2: "Balon",
    c3: "Tenis",
    c4: "Polu",
    c: "Lopta",

  }
  const colD8={
    d1: "Princ",
    d2: "Signal",
    d3: "Krvotok",
    d4: "Medved",
    d: "Mali",
  }

  const colA9={
    a1: "Kolica",
    a2: "Novac",
    a3: "Plaćanje",
    a4: "Kredit",
    a: "Keš",
  }
  const colB9={
    b1: "More",
    b2: "Pivo",
    b3: "Brijane",
    b4: "Capucino",
    b: "Pena",

  }
  const colC9={
    c1: "Identifikacija",
    c2: "Telefon",
    c3: "Zvuk",
    c4: "Student",
    c: "Kartica",

  }
  const colD9={
    d1: "Fotograf",
    d2: "Uspomena",
    d3: "Slon",
    d4: "Loše",
    d: "Pamćenje",
  }
  const colA10={
    a1: "Mornar",
    a2: "Pertle",
    a3: "Kanap",
    a4: "Kravata",
    a: "Čvor",
  }
  const colB10={
    b1: "Kompjuter",
    b2: "Televizija",
    b3: "Jezik",
    b4: "Instalacija",
    b: "Program",

  }
  const colC10={
    c1: "Ciklus",
    c2: "Niz",
    c3: "Brojač",
    c4: "Ponavljanje",
    c: "Iteracija",

  }
  const colD10={
    d1: "Železnica",
    d2: "Drum",
    d3: "Prekršaj",
    d4: "Gužva",
    d: "Saobraćaj",
  }

  const colA11={
    a1: "Šaban Šaulić",
    a2: "Oliver Dragojević",
    a3: "Lideri",
    a4: "Čokolada",
    a: "Galeb",
  }
  const colB11={
    b1: "Megadens",
    b2: "Dejan Ćirjaković",
    b3: "Magda",
    b4: "Državni posao",
    b: "Boškić",

  }
  const colC11={
    c1: "Preobražaj",
    c2: "Laplace",
    c3: "Telo",
    c4: "Autoboti",
    c: "Transformacija",

  }
  const colD11={
    d1: "Svetlo",
    d2: "Vazduh",
    d3: "Upozorenje",
    d4: "Pomoć",
    d: "Signal",
  }

  
  return (
    <>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/asocijacija1" element={<Association colA={colA1} colB={colB1} colC={colC1} colD={colD1} guess={"KOLAČIĆ"}></Association>}>
        </Route>
        <Route path="/asocijacija2" element={<Association colA={colA2} colB={colB2} colC={colC2} colD={colD2} guess={"MICROSOFT"}></Association>}></Route>
        <Route path="/asocijacija3" element={<Association colA={colA3} colB={colB3} colC={colC3} colD={colD3} guess={"PROTOKOL"}></Association>}></Route>
        <Route path="/asocijacija4" element={<Association colA={colA4} colB={colB4} colC={colC4} colD={colD4} guess={"ČVOR"}></Association>}></Route>
        <Route path="/asocijacija5" element={<Association colA={colA5} colB={colB5} colC={colC5} colD={colD5} guess={"OBLAK"}></Association>}></Route>
        <Route path="/asocijacija6" element={<Association colA={colA6} colB={colB6} colC={colC6} colD={colD6} guess={"POKAZIVAČ"}></Association>}></Route>
        <Route path="/asocijacija7" element={<Association colA={colA7} colB={colB7} colC={colC7} colD={colD7} guess={"ALGORITAM"}></Association>}></Route>
        <Route path="/asocijacija8" element={<Association colA={colA8} colB={colB8} colC={colC8} colD={colD8} guess={"SERVIS"}></Association>}></Route>
        <Route path="/asocijacija9" element={<Association colA={colA9} colB={colB9} colC={colC9} colD={colD9} guess={"MEMORIJA"}></Association>}></Route>
        <Route path="/asocijacija10" element={<Association colA={colA10} colB={colB10} colC={colC10} colD={colD10} guess={"PETLJA"}></Association>}></Route>
        <Route path="/asocijacija11" element={<Association colA={colA11} colB={colB11} colC={colC11} colD={colD11} guess={"DIGITALIZACIJA"}></Association>}></Route>
      {/*<Route path="/asocijacija12" element={<Association colA={colA12} colB={colB12} colC={colC12} colD={colD12} guess={""}></Association>}></Route>*/}
      </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;
