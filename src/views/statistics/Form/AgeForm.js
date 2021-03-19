/* eslint-disable react/prop-types */
import { CProgress } from '@coreui/react';
import React from 'react';

function AgeForm({ age, text }) {
  return (
    <>
      <div className="progress-group mb-4">
        <div className="progress-group-header">
          <span className="progress-group-text">{text}</span>
          <span className="ml-auto font-weight-bold">
            {age ? `${age.confCase.toLocaleString()} 명 ` : 0}
            <span className="text-muted small">
              {`(${age ? age.confCaseRate : 0}%)`}
            </span>
          </span>
        </div>
        <div className="progress-group-bars">
          <CProgress
            className="progress-sm"
            color="success"
            value={age ? age.confCaseRate : 0}
          />
        </div>
      </div>
    </>
  );
}

export default AgeForm;
