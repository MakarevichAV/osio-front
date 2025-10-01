import { useEffect, useState } from "react";
import socket from "../services/socket";

export function usePlcData() {
    const [values, setValues] = useState([]);

    useEffect(() => {
        socket.on("plc-data", (data) => {
            setValues(data.values);
        });

        return () => {
            socket.off("plc-data");
        };
    }, []);

    return values;
}