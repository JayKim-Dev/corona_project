import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import DetailStatistics from './DetailStatistics';
import TotalStatistics from './TotalStatistics';

function Statistics() {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>감염 통계</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs='12' md='12' xl='12'>
                  <TotalStatistics />
                  <hr className='mt-2' />
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
