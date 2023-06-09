import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Product } from "../components/Product";
import products from "../products";

export function HomeScreen() {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
