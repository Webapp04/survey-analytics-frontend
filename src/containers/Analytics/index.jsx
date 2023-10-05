import React from "react";
import { AnalyticContainer } from "./style";
import { useGetSurveyAnalyticsReport } from "../../services/apiQueries/dashboard";
import AnalyticCard from "../../components/AnalyticCard";

const Analytics = () => {
  const { data: surveyAnalyticsReport, loading: surveyAnalyticsReportLoading } =
    useGetSurveyAnalyticsReport();

  return (
    <AnalyticContainer>
      <AnalyticCard
        title="Avreage"
        type="average"
        data={surveyAnalyticsReport}
      />
      <AnalyticCard title="Min" type="min" data={surveyAnalyticsReport} />
      <AnalyticCard title="Max" type="max" data={surveyAnalyticsReport} />
    </AnalyticContainer>
  );
};

export default Analytics;
