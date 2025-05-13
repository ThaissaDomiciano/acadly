import './Card.css';

const Card = ({ titulo, professor, pendentes, entregues, onClick }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="titulo-card">{titulo}</h3>
                <p className="professor-label"><strong>PROFESSOR:</strong> {professor}</p>
                <div className="linha-separadora"></div>
                <div className="status">
                    <span className='titulo-pendente'>PENDENTES: <span className="pendente">{pendentes}</span></span>
                    <span className='titulo-entregue'>ENTREGUES: <span className="entregue">{entregues}</span></span>
                </div>
            </div>
            <div className="card-footer" onClick={onClick}>
                SALA
            </div>
        </div>
    );
};

export default Card;
