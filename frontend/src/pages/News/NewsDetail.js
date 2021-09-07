import { useState, useEffect } from "react";
import news from "./Temp_news";

function NewsDetail(props) {
    const {
        match: {
            params: { id },
        },
    } = props;
    const [newsTemp, setNewsTemp] = useState([]);

    useEffect(() => {
        console.log(news);
        for (let item of news) {
            if (item.id == id) {
                setNewsTemp(item);
            }
        }
        return;
    }, []);

    return (
        <div>
            <h2>{newsTemp.subject}</h2>
            <p>{newsTemp.content}</p>
        </div>
    );
}

export default NewsDetail;
