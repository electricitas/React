import React from 'react'
import ReactDOM from 'react-dom/client'
import Kappale from './ex5/Kappale.jsx'
import './index.css'

/*function sanoBoo() {
  console.log("boo from main.jsx!");
}*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
    <Profile
    profiiliTeksti={"Profiili"}
    korttiTeksti={"Kortti"}
    painikeTeksti={"Paina nappia!"}
    kasittelePainallus={sanoBoo}
/> */}
<Kappale teksti="hello, hello, mitä kello?">
  <h1>Terveisiä main.jsx:stä</h1>
</Kappale>
  </React.StrictMode>,
);
