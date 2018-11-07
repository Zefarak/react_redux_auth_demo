import React from 'react';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col, Table, CardBody, CardTitle, Card, CardHeader} from 'reactstrap';
import PanelHeader from "../../components/PanelHeader/PanelHeader";
import ProductsTable from "./TableComponent";


class Products extends React.Component{


    render(){
        console.log('products', this.props)
        const products = this.props.products;
        return(
            <div>
                <PanelHeader />
                <div className='content'>
                    <Row>
                        <Col xs={8}>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag='h4'>Products</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <ProductsTable products={products} />
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.items
    }
}

Products.propType = {
    products: PropType.array.IsRequired
}

export default connect(mapStateToProps)(Products);