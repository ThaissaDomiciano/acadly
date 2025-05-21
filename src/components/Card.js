import './Card.css';

const Card = ({ titulo, professor, onClick }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="titulo-card">{titulo}</h3>
                <p className="professor-label"><strong>PROFESSOR:</strong> {professor}</p>
                <div className="linha-separadora"></div>
                
            </div>
            <div className="card-footer" onClick={onClick}>
                SALA
            </div>
        </div>
    );
};

export default Card;
