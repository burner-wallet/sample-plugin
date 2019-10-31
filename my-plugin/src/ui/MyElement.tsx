import React from 'react';
import { BurnerContext } from '@burner-wallet/types';

const MyElement: React.FC<BurnerContext> = () => {
  return (
    <div>
      Injected plugin element
    </div>
  );
};

export default MyElement;
