import React from "react";
import PlcValue from "./PlcValue";

function PlcList({ values }) {
    return (
        <div>
            <h2>PLC Registers</h2>
            {values.map((val, i) => (
                <PlcValue key={i} label={`Register ${i}`} value={val} />
            ))}
        </div>
    );
}

export default PlcList;