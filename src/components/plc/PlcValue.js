import React from "react";

function PlcValue({key  , value, i}) {
    let dName = "";

    switch (i) {
        case 0:
            dName = "Status <-";
            break;
        case 1:
            dName = "Ready to start <-";
            break;
        case 2:
            dName = "Start Winding <=>";
            break;
        case 3:
            dName = "Start Heating <=>";
            break;
        case 6:
            dName = "T°C SetPoint <=>";
            break;
        default:
            dName = "-";
    }
    return (
        <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{i}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{dName}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{value}</td>
        </tr>
    );
}

export default PlcValue;