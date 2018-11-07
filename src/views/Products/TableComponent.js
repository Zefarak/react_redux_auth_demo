import React from 'react';
import {Table} from 'reactstrap'


class ProductsTable extends React.Component {

    render() {
        console.log('table', this.props)
        const products = this.props.products.map((product, index)=>{
            <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.tag_category}</td>
                <td>{product.tag_value}</td>
                <td><button className='btn btn-success'>Edit</button> </td>
            </tr>
        })

        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Value</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </Table>
        )

    }
}

export default ProductsTable;