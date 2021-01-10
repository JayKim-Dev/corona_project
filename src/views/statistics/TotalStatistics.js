import { CCol, CRow, CWidgetDropdown } from '@coreui/react';
import React from 'react';
import ChartLineSimple from '../charts/ChartLineSimple';

function TotalStatistics() {
  return (
    <CRow>
      <CCol sm='6' lg='3'>
        <CWidgetDropdown
          color='gradient-info'
          header='일일 검사 수'
          footerSlot={
            <ChartLineSimple
              pointed
              className='c-chart-wrapper mt-3 mx-3'
              style={{ height: '90px' }}
              dataPoints={[65, 59, 84, 84, 51, 55, 40]}
              pointHoverBackgroundColor='info'
              label='Members'
              labels='months'
            />
          }
        />
      </CCol>

      <CCol sm='6' lg='3'>
        <CWidgetDropdown
          color='gradient-success'
          header='일일 확진자'
          footerSlot={
            <ChartLineSimple
              pointed
              className='mt-3 mx-3'
              style={{ height: '90px' }}
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor='success'
              options={{ elements: { line: { tension: 0.00001 } } }}
              label='Members'
              labels='months'
            />
          }
        />
      </CCol>
    </CRow>
  );
}

export default TotalStatistics;
