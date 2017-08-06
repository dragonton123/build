
import React from 'react';
import './style/statusstyle.css';
import {Grid, Row, Col, Clearfix,Label} from 'react-bootstrap';



class StatusComponent extends React.Component {


  render() {
    return (

        <div>

        <Grid>
          <Row>
            <Col lg={1}>
            <div className="fb">

                <Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Row>
                <Row>
                    <Col lg={4}/>
                    <Col lg={1}>
                        <Label bsStyle="default">Default <span className="off"/></Label>
                    </Col>
                    <Col lg={4}/>
                    <Col lg={1}>
                        <Label bsStyle="default">Default <span className="on"/></Label>
                    </Col>
                </Row>
                <Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Row>
                  <Row>
                    <Col lg={1}/>
                    <Col lg={1}>
                        <Label bsStyle="default">Default <span className="on"/></Label>
                    </Col>
                    <Col lg={4}/>
                    <Col lg={1}>
                        <Label bsStyle="default">Default <span className="on"/></Label>
                    </Col>
                  </Row>

            </div>
            </Col>
          </Row>

        </Grid>


        </div>


    );
  }
}


export default StatusComponent
