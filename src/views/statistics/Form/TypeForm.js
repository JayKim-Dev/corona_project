/* eslint-disable react/prop-types */
import CIcon from '@coreui/icons-react';
import { CProgress } from '@coreui/react';
import React from 'react';

function TypeForm({ type, type2 }) {
  return (
    <>
      <div className="progress-group mb-4">
        <div className="progress-group-header">
          <CIcon className="progress-group-icon" name="cil-user" />
          <span className="progress-group-text">{type2 === 'male' ? '남성' : '여성'}</span>
          <span className="ml-auto font-weight-bold">
            {type ? `${type.confCase.toLocaleString()} 명 ` : 0}
            <span className="text-muted small">
              {`(${type ? type.confCaseRate : 0}%)`}
            </span>
          </span>
        </div>
        <div className="progress-group-bars">
          <CProgress
            className="progress-sm"
            color={type2}
            value={type ? type.confCaseRate : 0}
          />
        </div>
      </div>
    </>
  );
}

export default TypeForm;
