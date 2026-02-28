import React, { useEffect, useState } from 'react';
import styles from './InstallBanner.module.css';

export default function InstallBanner(){
  const [deferred, setDeferred] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    function handler(e){
      e.preventDefault();
      setDeferred(e);
      setVisible(true);
    }
    window.addEventListener('beforeinstallprompt', handler);
    return ()=> window.removeEventListener('beforeinstallprompt', handler);
  },[]);

  const install = async ()=>{
    if(!deferred) return;
    deferred.prompt();
    const choice = await deferred.userChoice;
    setVisible(false);
    setDeferred(null);
  };

  if(!visible) return null;
  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <div>Install HexaDeals for a better experience</div>
        <div>
          <button className="btn" onClick={install}>Install</button>
          <button className="btn" style={{background:'#f1f5f9',color:'#111827',marginLeft:8}} onClick={()=>setVisible(false)}>Close</button>
        </div>
      </div>
    </div>
  );
}
