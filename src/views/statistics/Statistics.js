import React from 'react';
import {
  CCard, CCardBody, CCardHeader, CCol, CRow,
} from '@coreui/react';
import DetailStatistics from './DetailStatistics';
import TotalStatistics from './TotalStatistics';

function Statistics() {
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" xl="12">
          <CCard>
            <CCardHeader>국내 발생 현황</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="12" xl="12">
                  <TotalStatistics />
                  <hr className="mt-2" />
                  <DetailStatistics />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default Statistics;
