import {Link} from 'wouter';
import React, {useContext} from 'react';
import {clientContext} from '../../../context/client';

export function EnterHotelButton() {
  const {loadingProgress} = useContext(clientContext);
  return (
    <Link className="rounded-button white plain mr-4" to="/play">
      {loadingProgress > 0
        ? loadingProgress === 100
          ? 'Enter Hotel (Ready!)'
          : `Loading ${loadingProgress}%`
        : 'Enter Hotel'}
    </Link>
  );
}
