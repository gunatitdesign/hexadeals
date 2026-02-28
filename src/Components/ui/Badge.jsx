import React from 'react';

export default function Badge({ children }){
  return (
    <span style={{display:'inline-block',padding:'4px 8px',background:'#eef2f7',borderRadius:999,color:'#0f172a',fontSize:'.8rem'}}>
      {children}
    </span>
  );
}
