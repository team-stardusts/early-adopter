import { Container, Row } from "react-bootstrap";
import news from "./Temp_news";
import NewsCard from "../../components/NewsCard";

function NewsList() {
    return (
        <Container className="w-75">
            <div className="mt-5">
                <h5>
                    <b>New EARLYADOPTER</b>
                </h5>
            </div>
            <Row className="mt-4 g-3" xs={1} md={2} lg={4}>
                {news.map((item) => (
                    <NewsCard
                        key={item.id}
                        title={item.subject}
                        img={item.mainImg}
                        editor={item.editor}
                        date={item.uploadedDate}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default NewsList;
