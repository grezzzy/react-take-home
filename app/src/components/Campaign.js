import React from 'react';
import Media from './Media';

function Campaign({data}) {

  const buildMedia = () => {
    if (!data) return;
    return data.medias.map((med, i) => {
      return <Media key={i} data={med} />
    })
  }
  return (
    <div>
      <img src={data.campaign_icon_url}></img>
      <h1>{data.campaign_name}</h1>
      <h3>{data.pay_per_install}</h3>
      {buildMedia()}
    </div>
  )
}

export default Campaign;