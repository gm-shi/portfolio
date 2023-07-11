import React, { useEffect } from 'react';
import { greetings } from '../portfolio';
import { Button, Container, Row, Col, Card, CardBody } from 'reactstrap';
import SocialLinks from '../components/SocialLinks';

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info"></div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white">
                    {greetings.title + ' '}
                  </h1>

                  <Card
                    className="shadow shadow-lg--hover mt-4"
                    style={{ display: 'flex' }}
                  >
                    <CardBody>
                      {greetings.personalInfo?.map((info, i) => {
                        return (
                          <p key={i} className="lead" style={{ marginTop: 0 }}>
                            <span style={{ fontWeight: 'bold' }}>
                              {`${info.title}: `}
                            </span>
                            {info.value}
                          </p>
                        );
                      })}
                    </CardBody>
                  </Card>

                  <p className="lead text-white">{greetings.description}</p>
                </Col>
                <Col lg="5" className={'mt-6 pl-5'}>
                  <img
                    style={{
                      borderRadius: '25% 10%',
                      width: '100%',
                      height: 'auto',
                      maxWidth: 400,
                      filter: 'drop-shadow(20px 10px 10px #2a63bf)',
                    }}
                    // src="https://gm-shi.github.io/portfolio/img/avatar.jpg"
                    src="/img/avatar.jpg"
                    alt="avatar"
                  />
                </Col>
              </Row>
              <Row>
                <SocialLinks />
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Greetings;
