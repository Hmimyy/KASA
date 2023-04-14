
import './Error.css';

import { Link } from "react-router-dom";

function Error() {
  return (
    

      <div className="error_section">
        <div className='error_title'>
        <div className="error_h1"> <h1>404</h1>
        <p className="error_p">
          Oups! La page que vous demandez n'existe pas.
          </p>
        
        <Link to="/" className="error_retour">
          Retour à la page d'acceuil
        </Link>
        </div>
      </div>
      </div>
  );
}

export default Error;
