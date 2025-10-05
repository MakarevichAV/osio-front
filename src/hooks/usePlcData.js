import { useEffect, useState } from "react";
import socket from "../services/socket";

export function usePlcData() {
    const [values, setValues] = useState([]);
    const [tempSP, setTempSP] = useState(null);

    useEffect(() => {
        socket.on("plc-data", (data) => {
            setValues(data.values);
            if (data.tempSP !== undefined) {
                setTempSP(data.tempSP);
            }
        });

        return () => {
            socket.off("plc-data");
        };
    }, []);

    return {values, tempSP};
}