import React from 'react';

function Produtos() {
  return (
    <div className="produtos-container">
      <h1>Produtos</h1>
      <div className="produto-item">
        <h3>Camisa do São Paulo I 25 New Balance Masculina Torcedor</h3>
        <h4>R$ 332,49</h4>
        <img
          src="/assets/camisa-sao-paulo-25-new-balance.jpg"
          alt="Camisa do São Paulo I 25 New Balance Masculina Torcedor"
          className="produto-img"
        />
      </div>
      <hr />
      <div className="produto-item">
        <h3>Camisa de Treino do São Paulo 25 New Balance</h3>
        <h4>R$ 208,99</h4>
        <img
          src="/assets/camisa-treino-sao-paulo-25-new-balance.jpg"
          alt="Camisa de Treino do São Paulo 25 New Balance"
          className="produto-img"
        />
      </div>
      <hr />
      <div className="produto-item">
        <h3>Camisa Corinthians II 25 Torcedor Nike Masculina</h3>
        <h4>R$ 314,99</h4>
        <img
          src="/assets/camisa-corinthians-25-nike.jpg"
          alt="Camisa Corinthians II 25 Torcedor Nike Masculina"
          className="produto-img"
        />
      </div>
      <hr />
      <div className="produto-item">
        <h3>Camisa Palmeiras Puma I 24/25 Torcedor</h3>
        <h4>R$ 249,90</h4>
        <img
          src="/assets/camisa-palmeiras-24-25-puma.jpg"
          alt="Camisa Palmeiras Puma I 24/25 Torcedor"
          className="produto-img"
        />
      </div>
    </div>
  );
}

export default Produtos;