import routes from "../routes";

function ApiController() {
    this.getComanyName = (req, res) => {
        const data = {
            companyname: "StarDusts",
        };
        res.json(data);
    };
}

export default ApiController;
