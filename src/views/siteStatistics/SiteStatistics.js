import { CCard } from '@coreui/react';
import React from 'react';
import './map.css';
import Korea from './Korea.svg';

function SiteStatistics() {
  return (
    <>
      <CCard>
        <img src={Korea} className="map" alt="korea" />
      </CCard>
    </>
  );
}

export default SiteStatistics;
