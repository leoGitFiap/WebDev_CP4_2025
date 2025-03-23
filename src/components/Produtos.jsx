import React from 'react';

function Produtos() {
  return (
    <div>
      <h1>Produtos</h1>
      <div>
        <h3>Camisa do São Paulo I 25 New Balance Masculina Torcedor</h3>
        <h4>R$ 332,49</h4>
        <img src="./src/assets/camisaDoBambi.jpg" alt="Produto 1" style={{ width: '300px', height: '300px' }} />
      </div>
      <hr />
      <div>
        <h3>Camisa de Treino do São Paulo 25 New Balance</h3>
        <h4>R$ 208,99</h4>
        <img src="./src/assets/camisaDoOutroBambi.jpg" alt="Produto 2" style={{ width: '300px', height: '300px' }} />
      </div>
      <hr />
      <div>
        <h3>Camisa Corinthians II 25 Torcedor Nike Masculina</h3>
        <h4>R$ 314,99</h4>
        <img src="./src/assets/CamisaDoMaiorClubeDoMundo.jpg" alt="Produto 3" style={{ width: '300px', height: '300px' }} />
      </div>
      <hr />
      <div>
        <h3>Camisa Palmeiras Puma I 24/25 Torcedor</h3>
        <h4>R$ 249,90</h4>
        <img src="./src/assets/camisaDoSemMundial.jpg" alt="Produto 4" style={{ width: '300px', height: '300px' }} />
      </div>
    </div>
  );
}

export default Produtos;