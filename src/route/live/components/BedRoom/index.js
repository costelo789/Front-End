import React from 'react';
import AlertBedRoom from './AlertBedRoom';
import Smoke from './Smoke';
import Temperature from './Temperature';

export default function BedRoom() {
    return (
        <div>
            <Temperature />
            <Smoke />
            <AlertBedRoom />
        </div>

    )
}