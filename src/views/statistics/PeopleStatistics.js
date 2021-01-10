import CIcon from '@coreui/icons-react';
import {
  CCallout,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
} from '@coreui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PeopleStatistics() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        '/getCovid19GenAgeCaseInfJson?ServiceKey=MymrrXPoMcFDebHXSUQYDklXpKdbBfvt%2FulM%2BlnLRWec%2FecG7cOsDFhak264dyHXJ0JRth66RNR4W5P0afBreg%3D%3D',
        {}
      )
      .then((res) => {
        setData(res.data.response.body.items.item);
      })
      .catch((e) => {
        console.log(e);
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
        <CCol>
          <CCard>
            <CCardHeader>감염 통계</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6">
                  <CRow>
                    <CCol sm="6">
                      <CCallout color="primary">
                        <small className="text-muted">누적 검사 수</small>
                        <br />
                        <strong className="h4">9,123</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">확진자</small>
                        <br />
                        <strong className="h4">22,643</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <span className="progress-group-text">10대 미만</span>
                      <span className="ml-auto font-weight-bold">
                        {age0 ? age0.confCase.toLocaleString() : 0}{' '}
                        <span className="text-muted small">
                          ({age0 ? age0.confCaseRate : 0}%)
                        </span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value={age0 ? age0.confCaseRate : 0}
                      />
                    </div>
                  </div>

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <span className="progress-group-text">10대</span>
                      <span className="ml-auto font-weight-bold">
                        {age10 ? age10.confCase.toLocaleString() : 0}{' '}
                        <span className="text-muted small">
                          ({age10 ? age10.confCaseRate : 0}%)
                        </span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value={age10 ? age10.confCaseRate : 0}
                      />
                    </div>
                  </div>

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <span className="progress-group-text">20대</span>
                      <span className="ml-auto font-weight-bold">
                        {age20 ? age20.confCase.toLocaleString() : 0}{' '}
                        <span className="text-muted small">
                          ({age20 ? age20.confCaseRate : 0}%)
                        </span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value={age20 ? age20.confCaseRate : 0}
                      />
                    </div>
                  </div>

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <span className="progress-group-text">30대</span>
                      <span className="ml-auto font-weight-bold">
                        {age30 ? age30.confCase.toLocaleString() : 0}{' '}
                        <span className="text-muted small">
                          ({age30 ? age30.confCaseRate : 0}%)
                        </span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value={age30 ? age30.confCaseRate : 0}
                      />
                    </div>
                  </div>

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <span className="progress-group-text">40대</span>
                      <span className="ml-auto font-weight-bold">
                        {age40 ? age40.confCase.toLocaleString() : 0}{' '}
                        <span className="text-muted small">
                          ({age40 ? age40.confCaseRate : 0}%)
                        </span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value={age40 ? age40.confCaseRate : 0}
                      />
                    </div>
                  </div>

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <span className="progress-group-text">50대</span>
                      <span className="ml-auto font-weight-bold">
                        {age50 ? age50.confCase.toLocaleString() : 0}{' '}
                        <span className="text-muted small">
                          ({age50 ? age50.confCaseRate : 0}%)
                        </span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value={age50 ? age50.confCaseRate : 0}
                      />
                    </div>
                  </div>

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <span className="progress-group-text">60대</span>
                      <span className="ml-auto font-weight-bold">
                        {age60 ? age60.confCase.toLocaleString() : 0}{' '}
                        <span className="text-muted small">
                          ({age60 ? age60.confCaseRate : 0}%)
                        </span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value={age60 ? age60.confCaseRate : 0}
                      />
                    </div>
                  </div>

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <span className="progress-group-text">70대</span>
                      <span className="ml-auto font-weight-bold">
                        {age70 ? age70.confCase.toLocaleString() : 0}{' '}
                        <span className="text-muted small">
                          ({age70 ? age70.confCaseRate : 0}%)
                        </span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value={age70 ? age70.confCaseRate : 0}
                      />
                    </div>
                  </div>

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <span className="progress-group-text">80대 이상</span>
                      <span className="ml-auto font-weight-bold">
                        {age80 ? age80.confCase.toLocaleString() : 0}{' '}
                        <span className="text-muted small">
                          ({age80 ? age80.confCaseRate : 0}%)
                        </span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value={age80 ? age80.confCaseRate : 0}
                      />
                    </div>
                  </div>
                </CCol>

                <CCol xs="12" md="6" xl="6">
                  <CRow>
                    <CCol sm="6">
                      <CCallout color="warning">
                        <small className="text-muted">누적 확진율</small>
                        <br />
                        <strong className="h4">78,623</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="danger">
                        <small className="text-muted">사망자</small>
                        <br />
                        <strong className="h4">49,123</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-user" />
                      <span className="progress-group-text">남성</span>
                      <span className="ml-auto font-weight-bold">
                        {male ? male.confCase.toLocaleString() : 0}{' '}
                        <span className="text-muted small">
                          ({male ? male.confCaseRate : 0}%)
                        </span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="info"
                        value="43"
                      />
                    </div>
                  </div>
                  <div className="progress-group mb-5">
                    <div className="progress-group-header">
                      <CIcon
                        className="progress-group-icon"
                        name="cil-user-female"
                      />
                      <span className="progress-group-text">여성</span>
                      <span className="ml-auto font-weight-bold">
                        {female ? female.confCase.toLocaleString() : 0}{' '}
                        <span className="text-muted small">
                          ({female ? female.confCaseRate : 0}%)
                        </span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="danger"
                        value={female ? female.confCaseRate : 0}
                      />
                    </div>
                  </div>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default PeopleStatistics;
