import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home() {
  const [valI, setValI] = useState(0);
  const [valF, setValF] = useState(0);
  const [valPV, setValPV] = useState(0);
  const [valmA, setValmA] = useState(0);
  const [valPorc, setValPorc] = useState(0);
  const [valAITRT, setValAITRT] = useState(0);

  function calculaPV(I, F, PV){
    if((Number(I) === 0 && Number(F) === 0) || Number(F) < Number(I)){
      setValPV(0);
      setValAITRT(0);
      setValPorc(0);
      return;
    }

    if(PV == 0){
      setValAITRT(0);
      setValPorc(0);
      return;
    }

    let resultmA = (16*(Number(PV) - Number(I)) / (Number(F) - Number(I))) + 4;
    let resultPorc = ((resultmA - 4)*100)/16;
    let resultAITRT = ((resultmA - 4)*28479)/16;

    setValPorc(resultPorc.toFixed(2));
    setValAITRT(resultAITRT.toFixed(0));
    setValmA(resultmA.toFixed(2));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Conversor mA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <h1 className={styles.title}>
        Conversor mA
      </h1>   

        <div className={styles.result}>
          <h2 className={styles.titlePV} style={{color: '#000000'}}>Valor em percentual: </h2>
          <h2>{valPorc} %</h2>
        </div>
        <div className={styles.result}>
          <h2 className={styles.titlePV} style={{color: '#000000'}}>Valor em corrente: </h2>
          <h2>{valmA} mA</h2>
        </div>
        <div className={styles.result}>
          <h2 className={styles.titlePV} style={{color: '#000000'}}>Valor AITRT: </h2>
          <h2>{valAITRT}</h2>
        </div>
        

        <h2>Entre com a faixa da U.E.:</h2>
        <div className={styles.inputArea}>
          <h3>INICIAL</h3>
          <h3> = </h3>
          <input 
            className={styles.inputBox}
            value={valI}
            type={'number'}
            onChange={({ target: { value: radius } }) => { 
              setValI(radius); 
              calculaPV(radius, valF, valPV)
            }}
          />
        </div>

        <div className={styles.inputArea}>
          <h3>FINAL</h3>
          <h3> = </h3>
          <input 
            className={styles.inputBox}
            value={valF}
            type={'number'}
            onChange={({ target: { value: radius } }) => { 
              setValF(radius); 
              calculaPV(valI, radius, valPV)
            }}
          />
        </div>


        <div className={styles.inputArea}>
          <h3>PV</h3>
          <h3> = </h3>
          <input 
            type="range"
            step={0.01}
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
            type={'number'}
            onChange={({ target: { value: radius } }) => { 
              setValPV(radius); 
              calculaPV(valI, valF, radius)
            }}
          />
        </div>

        <footer className={styles.footer}>
        <p>
          Powered by <a href="http://andreoliveiracunha.com.br/">André Oliveira Cunha</a>
        </p>
      </footer>

      </main>
    </div>
  )
}


// i, f, pv

// pv = 