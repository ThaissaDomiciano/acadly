import './Card.css';

const Card = ({ titulo, professor, botoes }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="titulo-card">{titulo}</h3>
        <p className="professor-label"><strong>PROFESSOR:</strong> {professor}</p>
        <div className="linha-separadora"></div>
      </div>
      <div className="card-footer-botoes">
        {botoes?.map((botao, index) => (
          <button key={index} className={botao.className} onClick={botao.onClick}>
            {botao.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
