import React from 'react'
import Plug from './plug'
import './plugPage.scss'

export default function ThePlugPage({ campaigns }) {
    return (
        <div>
            <header className="header">
                <h2>PLUGS</h2>
            </header>
            { campaigns?.map(campaign => (
                <Plug campaign={campaign} key={campaign.id} />
            ))}
        </div>
    )
}
