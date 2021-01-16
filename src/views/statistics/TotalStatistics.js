import { CCallout, CCol, CRow } from '@coreui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import properties from '../../properties';

function TotalStatistics() {
  const [totalData, setTotalData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `/getCovid19InfStateJson?ServiceKey=${properties.ServiceKey}&startCreateDt=${properties.startDt}&endCreateDt=${properties.endCreateDt}`
      )
      .then((res) => {
        setTotalData(res.data.response.body.items.item);
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let accExamCntPerday = 0;
  let decideCntPerday = 0;
  let deathCntPerday = 0;

  if (totalData.length >= 2) {
    accExamCntPerday = (totalData[0].accExamCnt - totalData[1].accExamCnt).toLocaleString();
    decideCntPerday = (totalData[0].decideCnt - totalData[1].decideCnt).toLocaleString();
    deathCntPerday = (totalData[0].deathCnt - totalData[1].deathCnt).toLocaleString();
  }

  return (
    <CRow>
      <CCol sm='3'>
        <CCallout color='info'>
          <small className='text-muted'>누적 검사 수</small>
          <br />
          <strong className='h4'>{totalData[0] ? `${totalData[0].accExamCnt.toLocaleString()} 명` : `0 명`}</strong>
          <div>
            <small>전일 대비 (+ {accExamCntPerday} 명)</small>
          </div>
        </CCallout>
      </CCol>
      <CCol sm='3'>
        <CCallout color='success'>
          <small className='text-muted'>누적 확진자</small>
          <br />
          <strong className='h4'>{totalData[0] ? `${totalData[0].decideCnt.toLocaleString()} 명` : `0 명`}</strong>
          <div>
            <small>전일 대비 (+ {decideCntPerday} 명)</small>
          </div>
        </CCallout>
      </CCol>
      <CCol sm='3'>
        <CCallout color='warning'>
          <small className='text-muted'>누적 확진율</small>
          <br />
          <strong className='h4'>{totalData[0] ? `${totalData[0].accDefRate.toFixed(1)}%` : `0%`}</strong>
          <div>
            <small>&nbsp;</small>
          </div>
        </CCallout>
      </CCol>
      <CCol sm='3'>
        <CCallout color='danger'>
          <small className='text-muted'>사망자</small>
          <br />
          <strong className='h4'>{totalData[0] ? `${totalData[0].deathCnt.toLocaleString()} 명` : 0}</strong>
          <div>
            <small>전일 대비 (+ {deathCntPerday} 명)</small>
          </div>
        </CCallout>
      </CCol>
    </CRow>
  );
}

export default TotalStatistics;
