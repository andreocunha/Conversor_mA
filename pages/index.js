import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home() {
  const [valI, setValI] = useState(0);
  const [valF, setValF] = useState(0);
  const [valPV, setValPV] = useState(0);
  const [valmA, setValmA] = useState(0);

  function calculaPV(I, F, PV){
    if(Number(I) === 0 && Number(F) === 0){
      setValPV(0);
      return;
    }

    let result = (16*(Number(PV) - Number(I)) / (Number(F) - Number(I))) + 4;
    setValmA(result.toFixed(3));
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
        <div className={styles.inputArea}>
          <h3>FINAL</h3>
          <h3> = </h3>
          <input 
            className={styles.inputBox}
            value={valF}
            onChange={({ target: { value: radius } }) => { 
              setValF(radius); 
              calculaPV(valI, radius, valPV)
            }}
          />
        </div>

        <div className={styles.inputArea}>
          <h3>INICIAL</h3>
          <h3> = </h3>
          <input 
            className={styles.inputBox}
            value={valI}
            onChange={({ target: { value: radius } }) => { 
              setValI(radius); 
              calculaPV(radius, valF, valPV)
            }}
          />
        </div>

        <div className={styles.inputArea}>
          <h3>PV</h3>
          <h3> = </h3>
          <input 
            type="range"
            step={1}
            min={valI} 
            max={valF}
            value={valPV}
            onChange={({ target: { value: radius } }) => { 
              setValPV(radius); 
              calculaPV(valI, valF, radius)
            }}
          />
          <input 
            className={styles.inputBox}
            value={valPV}
            onChange={({ target: { value: radius } }) => { 
              setValPV(radius); 
              calculaPV(valI, valF, radius)
            }}
          />
        </div>

        <h1 className={styles.titlePV}>{valmA} mA</h1>

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