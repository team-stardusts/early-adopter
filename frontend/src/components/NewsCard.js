import { Card } from "react-bootstrap";

function NewsCard({ title, img, editor, date }) {
    return (
        <div style={{ minWidth: "180px" }}>
            <Card className="w-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{editor}</Card.Text>
                    <Card.Text>{date}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default NewsCard;
