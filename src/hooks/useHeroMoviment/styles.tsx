import React from 'react';
import "styles.tsx";

export function alertStyles () {
    return (
        <div style={{
                padding: 20,
                backgroundColor: '#f44336',
                color: 'white',
                bottom: 15,
                left: 15,
                fontWeight: 'bold',
                float: 'right',
                fontSize: 22,
                lineHeight: 20,
                cursor: 'pointer',
        }}></div>
    )
}