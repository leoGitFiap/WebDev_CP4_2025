import React from 'react';

function Produtos() {
  return (
    <div>
      <h1>Produtos</h1>
      <div>
        <h3>Camisa do São Paulo I 25 New Balance Masculina Torcedor</h3>
        <img src="/assets/camisa-do-bambi.jpg" alt="Camisa do São Paulo I 25 New Balance Masculina Torcedor" style={{ width: '200px', height: '200px' }} />
        <h4>R$ 332,49</h4>
      </div>
      <hr />
      <div>
        <h3>Camisa de Treino do São Paulo 25 New Balance</h3>
        <img src="/assets/camisa-do-outro-bambi.jpg" alt="Camisa de Treino do São Paulo 25 New Balance" style={{ width: '200px', height: '200px' }} />
        <h4>R$ 208,99</h4>
      </div>
      <hr />
      <div>
        <h3>Camisa Corinthians II 25 Torcedor Nike Masculina</h3>
        <img src="/assets/camisa-do-maior-clube-do-mundo.jpg" alt="Camisa Corinthians II 25 Torcedor Nike Masculina" style={{ width: '200px', height: '200px' }} />
        <h4>R$ 314,99</h4>
      </div>
      <hr />
      <div>
        <h3>Camisa Palmeiras Puma I 24/25 Torcedor</h3>
        <img src="/assets/camisa-do-sem-mundial.jpg" alt="Camisa Palmeiras Puma I 24/25 Torcedor" style={{ width: '200px', height: '200px' }} />
        <h4>R$ 249,90</h4>
      </div>
    </div>
  );
}

export default Produtos;