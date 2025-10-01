import React from "react";

function PlcValue({ label, value }) {
    return (
        <div style={{ marginBottom: "8px" }}>
            <strong>{label}:</strong> {value}
        </div>
    );
}

export default PlcValue;