import axios from "axios";

export const fetchAllCampaigns = async () => {
  return axios.get("https://www.plugco.in/public/take_home_sample_feed");
};
