import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Books from "../data/fantasy.json"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const AllTheBooks = () => {
    return (
        <Container>
            <Row>
            {Books.map((book)=> {
                return (
                    <Card className="col-6 col-md-4 col-lg-3">
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>{book.category}</Card.Text>
                      <Card.Text>{book.price}$</Card.Text>
                      <Button variant="dark">Buy!</Button>
                    </Card.Body>
                    </Card>
                )
            })}
            </Row>
      </Container> 
    )
}

export default AllTheBooks