import React from 'react';

export const Tela = (valor: any, res: any) => {
    return (
      <div style={
          { display: 'flex', padding: '0 20px 0 20px', justifyContent: 'center',
          alignItems: 'flex-start', backgroundColor: 'red', flexDirection: 'column' }
      }>
        <span style={
          { fontSize: '25px', color: 'white', height: '20px' }
        }>{valor}</span>
        <span style={
          { fontSize: '50px', color: 'white' }
        }>{res}</span>
      </div>
    )
  }