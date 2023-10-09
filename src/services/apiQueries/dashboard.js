import { useQuery } from "react-query";
import { api } from "../api";
import { serialize } from "../../utility/helper";

export default function useGetSurveyReport(dateRange) {
  let query;
  if (dateRange?.[0] !== null && dateRange?.[1]) {
    const startDate = new Date(dateRange?.[0]?.$d);
    const endDate = new Date(dateRange?.[1]?.$d);
    query = {
      startDate: startDate,
      endDate: endDate,
    };
  }
  const queryParam = dateRange ? serialize(query) : serialize();
  const getReport = () => api.get(`surveys${queryParam}`);

  return useQuery(`surveys${queryParam}`, getReport, {
    enabled: true,
  });
}

export function useGetSurveyAnalyticsReport() {
  const getAnalyticsReport = () => api.get(`survey-analytics`);
  return useQuery(`survey-analytics`, getAnalyticsReport, {
    enabled: true,
  });
}
