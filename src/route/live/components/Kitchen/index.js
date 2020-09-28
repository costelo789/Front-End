import React from 'react';
import Smoke from './Smoke';
import Temperature from './Temperature';
import AlertKitchen from './AlertKitchen';

export default function Kitchen() {
    return (
        <div>
            <Temperature/>
            <Smoke/>
            <AlertKitchen/>
        </div>

    )
}