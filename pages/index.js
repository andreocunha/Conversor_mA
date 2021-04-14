import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home() {
  const [valI, setValI] = useState(0);
  const [valF, setValF] = useState(0);
  const [valPV, setValPV] = useState(0);

  function calculaPV(I, F){
    if(Number(I) === 0 || Number(F) === 0){
      setValPV(0);
      return;
    }

    let result = (16*(Number(I) - 3) / (Number(F) - 3)) + 4;
    setValPV(result.toFixed(3));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Conversor mA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Conversor mA
      </h1>   

      <main className={styles.main}>

        <h1 className={styles.titlePV}>PV = {valPV}</h1>

        <div className={styles.inputArea}>
          <h3>i</h3>
          <h3> = </h3>
          <input 
            type="range"
            step={1}
            min={3} 
            max={200}
            value={valI}
            onChange={({ target: { value: radius } }) => { 
              setValI(radius); 
              calculaPV(radius, valF)
            }}
          />
          <input 
            className={styles.inputBox}
            value={valI}
            onChange={({ target: { value: radius } }) => { 
              setValI(radius); 
              calculaPV(radius, valF)
            }}
          />
        </div>

        <div className={styles.inputArea}>
          <h3>f</h3>
          <h3> = </h3>
          <input 
            type="range"
            step={1}
            min={3} 
            max={200}
            value={valF}
            onChange={({ target: { value: radius } }) => { 
              setValF(radius); 
              calculaPV(valI, radius)
            }}
          />
          <input 
            className={styles.inputBox}
            value={valF}
            onChange={({ target: { value: radius } }) => { 
              setValF(radius); 
              calculaPV(valI, radius)
            }}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by <a href="http://andreoliveiracunha.com.br/">André Oliveira Cunha</a>
        </p>
      </footer>
    </div>
  )
}


// i, f, pv

// pv = 