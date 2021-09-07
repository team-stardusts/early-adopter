import { Row } from "react-bootstrap";
import "./Footer.css";

function Footer({ companyName }) {
    return (
        <div className="footer-wrapper">
            <Row className="footer" xs={1} md={3}>
                <div className="footer__company-name">
                    <p>{companyName}</p>
                </div>
                <div className="footer__info">
                    <div className="footer__box">
                        <div className="footer__info__title">
                            <p>ABOUT US</p>
                        </div>
                        <div>
                            <p>
                                상호 : (주)StarDust <br />
                                주소 : 경기도 수원시 팔달구 <br />
                                등록번호 : 수원 아000000 <br />
                                등록일: 2021년 12월 31일 <br />
                                개인정보관리 책임자, 청소년보호책임자 : 홍길동
                                <br />
                                사업자 번호 : 000-00-00000 <br />
                                제휴, 제보 및 보도자료 : temp@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer__follow">
                    <div className="footer__box">
                        <div className="footer__follow__title">
                            <p>FOLLOW US</p>
                        </div>
                        <div>
                            <p>A B C D</p>
                        </div>
                    </div>
                </div>
            </Row>
        </div>
    );
}

export default Footer;
