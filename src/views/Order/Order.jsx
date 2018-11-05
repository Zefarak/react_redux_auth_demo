import React from "react";
import PropType from 'prop-types';
import { Row, Col } from "reactstrap";
import { PanelHeader } from "components";


class OrderPage extends React.Component{

    render(){

        return(
            <div>
                <PanelHeader size='sm' />
                <div className="content">
                    <Row>
                        <Col md={6}>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag='h4'>Products</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Category</th>
                                            </tr>
                                        </thead>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={6}>
                        <Card className="card-user">
                <div className="image">
                  <img src={userBackground} alt="..." />
                </div>
                <CardBody>
                  <CardAuthor
                    avatar={userAvatar}
                    avatarAlt="..."
                    title="Mike Andrew"
                    description="michael23"
                  />
                  <p className="description text-center">
                    "Lamborghini Mercy <br />
                    Your chick she so thirsty <br />
                    I'm in that two seat Lambo"
                  </p>
                </CardBody>
                <hr />
                <CardSocials
                  size="lg"
                  socials={[
                    {
                      icon: "fab fa-facebook-f",
                      href: "https://www.facebook.com/"
                    },
                    {
                      icon: "fab fa-twitter",
                      href: "https://www.facebook.com/"
                    },
                    {
                      icon: "fab fa-google-plus-g",
                      href: "https://plus.google.com/discover"
                    }
                  ]}
                />
              </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}