/* eslint-disable no-shadow */
/* eslint-disable no-console */
import { CCol, CRow } from '@coreui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import properties from '../../properties';
import AgeForm from './Form/AgeForm';
import TypeForm from './Form/TypeForm';

function DetailStatistics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `/getCovid19GenAgeCaseInfJson?ServiceKey=${properties.ServiceKey}&startCreateDt=${properties.startCreateDt}`,
      )
      .then((res) => {
        setData(res.data.response.body.items.item);
      })
      .catch((e) => {
        console.error(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const age0 = data.find((data) => data.gubun === '0-9');
  const age10 = data.find((data) => data.gubun === '10-19');
  const age20 = data.find((data) => data.gubun === '20-29');
  const age30 = data.find((data) => data.gubun === '30-39');
  const age40 = data.find((data) => data.gubun === '40-49');
  const age50 = data.find((data) => data.gubun === '50-59');
  const age60 = data.find((data) => data.gubun === '60-69');
  const age70 = data.find((data) => data.gubun === '70-79');
  const age80 = data.find((data) => data.gubun === '80 이상');
  const male = data.find((data) => data.gubun === '남성');
  const female = data.find((data) => data.gubun === '여성');

  return (
    <>
      <CRow>
        <CCol xs="12" md="6" xl="6">
          <div className="progress-group mb-3">
            <b>확진자 연령별 현황</b>
          </div>
          <CCol>
            <AgeForm age={age0} text="10대 미만" />
            <AgeForm age={age10} text="10대" />
            <AgeForm age={age20} text="20대" />
            <AgeForm age={age30} text="30대" />
            <AgeForm age={age40} text="40대" />
            <AgeForm age={age50} text="50대" />
            <AgeForm age={age60} text="60대" />
            <AgeForm age={age70} text="70대" />
            <AgeForm age={age80} text="80대 이상" />
          </CCol>
        </CCol>

        <CCol xs="12" md="6" xl="6">
          <div className="progress-group mb-3">
            <b>확진자 성별 현황</b>
          </div>
          <CCol>
            <TypeForm type={male} type2="male" />
            <TypeForm type={female} type2="female" />
          </CCol>
        </CCol>
      </CRow>
    </>
  );
}

export default DetailStatistics;
