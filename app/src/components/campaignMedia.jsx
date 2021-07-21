import React from 'react'
// {
// cover_photo_url: "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/tiktok%2F44f871ab-a7de-4bcc-9ecf-4ecadbc5bc83.png?alt=media&token=ea854bfa-5fb7-4b23-b85c-312ae9860338",
// download_url: "https://firebasestorage.googleapis.com/v0/b/plugcoinprod.appspot.com/o/tiktok%2F44f871ab-a7de-4bcc-9ecf-4ecadbc5bc83.mp4?alt=media&token=9580e0d2-f07e-4c78-bcab-d1b26d2c525a",
// tracking_link: "www.plugco.in/tiktok/2",
// media_type: "video"
// }

export default function CampaignMedia({ media }) {
    return (
        <div className="media-container">
            {media.media_type}
            <video width="100" height="180" poster={media.cover_photo_url} controls>
                <source src={media.download_url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
