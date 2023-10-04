import { useQuery } from "react-query";
import { api } from "../api";

export default function useGetSurveyReport() {
  const getReport = () => api.get(`surveys`);
  return useQuery(`surveys`, getReport, {
    enabled: true,
  });
}

export function useGetSurveyAnalyticsReport() {
  const getAnalyticsReport = () => api.get(`survey-analytics`);
  return useQuery(`survey-analytics`, getAnalyticsReport, {
    enabled: true,
  });
}
