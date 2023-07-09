import React from 'react';
import { Card, CardBody, Badge } from 'reactstrap';
import { EducationType } from '../types/sections';
import { Icon } from '@iconify/react';

const EducationCard = ({
  schoolName,
  subHeader,
  duration,
  desc,
  grade,
  descBullets,
  schoolLogoUrl,
}: EducationType) => {
  return (
    <Card className=" shadow shadow-lg--hover mt-4">
      <CardBody>
        <div className="d-flex px-3">
          <div className="pl-4">
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <img src={schoolLogoUrl} alt="logo" width={80} />
              <h5 className="text-info">{schoolName}</h5>
            </div>
            <h6>{subHeader}</h6>
            <p className="description mt-3">{desc}</p>
            <Badge color="info" className="mr-1">
              {duration}
            </Badge>
            {grade && (
              <Badge color="primary" className="mr-1">
                {grade}
              </Badge>
            )}
            <br />
            <br />
            <ul>
              {descBullets
                ? descBullets.map((desc) => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default EducationCard;
