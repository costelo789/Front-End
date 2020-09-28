import React from 'react';
import Smoke from './Smoke';
import Temperature from './Temperature';
import AlertLivingRoom from './AlertLivingRoom';

export default function LivingRoom() {
    return (
        <div>
            <Temperature/>
            <Smoke/>
            <AlertLivingRoom/>
        </div>

    )
}