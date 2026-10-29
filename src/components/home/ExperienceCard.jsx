import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4">
      <div className="pb-5 text-center">
        {data.companylogo && <img className=" bg-white mb-3" src={data.companylogo} alt="" />}
        <p className="lead">
          <strong>{data.company}</strong>
          <br />
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;