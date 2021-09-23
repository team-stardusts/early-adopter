import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { routes } from "../routes";
import "./NewsCard.css";

function NewsCard({ id, title, img, editor, date }) {
    const pathToDetail = `${routes.news}/${id}`;

    return (
        <div className="crd-box">
            <Card className="crd-news">
                <div className="thumbnail-wrapper">
                    <Link className="lnk-detail" to={pathToDetail}>
                        <div className="crd-thumbnail">
                            <Card.Img variant="top" src={img} />
                        </div>
                    </Link>
                </div>
                <Card.Body>
                    <Link to={pathToDetail}>
                        <Card.Title>
                            <p className="crd-news__title">
                                {title.slice(0, 30)}
                            </p>
                        </Card.Title>
                    </Link>
                    <Link to={pathToDetail}>
                        <Card.Text className="crd-news__editor">
                            {editor}
                        </Card.Text>
                    </Link>
                    <Link to={pathToDetail}>
                        <Card.Text className="crd-news__date">{date}</Card.Text>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default NewsCard;
