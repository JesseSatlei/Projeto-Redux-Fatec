import React from 'react';

import Card from './Card';

export default props => {

  return (
    <Card title="Sorteio dos Números" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong> { 50 } </strong>
        </span>
      </div>
    </Card>
  );
}