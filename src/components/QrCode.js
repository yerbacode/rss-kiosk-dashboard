import { useContext } from "react";
import { RssDataContext } from "../context/RssContext";
var QRCode = require('qrcode.react');

const QrCode = () => {
    const { rss, count } = useContext(RssDataContext);
    const QrLoader = () => {
        if (rss === undefined) {
            return (
                <div>Loading!</div>
            )
        } else {
            return (
                <QRCode className="rss__qrcode" value={rss[count].link} />
            )
        }
    }
    return (
        <div>{QrLoader()}</div>
    )
}

export default QrCode;

