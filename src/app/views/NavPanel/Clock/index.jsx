import React, {useEffect, useState} from "react";
import {w3cwebsocket as W3CWebSocket} from "websocket";

import "./index.scss";

const client = new W3CWebSocket('ws://localhost:3001');

export default function Clock() {
    const [wsTime, setWsTime] = useState(null);

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };

        client.onmessage = message => {
            try {
                const json = JSON.parse(message.data);

                const currentDate = (new Date(json.currentDate)).toLocaleTimeString();

                setWsTime(currentDate)
            } catch {}
        };
    }, [])

    if (!wsTime) return null;

    return (
        <p className="clock m-1 p-1">{wsTime}</p>
    )
}