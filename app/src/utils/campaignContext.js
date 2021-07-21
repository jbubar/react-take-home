import React, { createContext, useState, useEffect } from "react";
import { fetchAllCampaigns } from "./campaignApiUtil";

export const CampaignContext = createContext();

export const CampaignContextProvider = ({ children }) => {
  const [campaignData, setCampaignData] = useState([]);

  useEffect(() => {
    fetchAllCampaigns().then((res) => {
      setCampaignData(res.data.campaigns);
    });
  }, []);

  return (
    <CampaignContext.Provider value={campaignData}>
      {children}
    </CampaignContext.Provider>
  );
};
