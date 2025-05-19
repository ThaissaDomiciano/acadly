import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ user, allowed, children }) => {
  if (!user) return <Navigate to="/login" replace />;
  
  const tipoNormalizado = user.tipo?.toUpperCase(); // ← converte para "PROFESSOR" ou "ALUNO"
  
  if (!allowed.includes(tipoNormalizado)) return <Navigate to="/login" replace />;

  return children;
};

export default PrivateRoute;
