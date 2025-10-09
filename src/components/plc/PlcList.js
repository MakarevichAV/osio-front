import React from "react";
import PlcValue from "./PlcValue";

function PlcList({ values }) {
    return (
        <div>
            <h2>PLC Registers</h2>
            <table style={{ borderCollapse: "collapse", width: "380px" }}>
                <thead>
                <tr>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>N°reg</th>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Value</th>
                </tr>
                </thead>
                <tbody>
                {values.map((val, i) => (
                    <PlcValue key={i} value={val} i={i} />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlcList;