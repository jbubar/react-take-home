import React from 'react'
import CampaignMedia from './campaignMedia'

export default function Plug({ campaign }) {
    return (
        <section className="campaign">
            <header className="campaign-header">
                <img 
                    src={campaign.campaign_icon_url} 
                    className="campain-icon" 
                    alt={`${campaign.campaign_name} icon`}
                />
                <div className="campaign-header-text">
                    <div className="campaign-name">{campaign.campaign_name}</div>
                    <div className="campaign-per-install">{`${campaign.pay_per_install} per install`}</div>
                </div>
            </header>
            {campaign.medias.map(media => (
                <CampaignMedia media={media} />
            ))}
        </section>
    )
}
