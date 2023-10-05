import React, { useState } from "react";
import useGetSurveyReport from "../../services/apiQueries/dashboard";
import AnalyticCard from "../../components/AnalyticCard";
import "./dashboard.css";
import { Tab, Tabs } from "@mui/material";
import SurveyTable from "../../components/SurveyTable";

const Dashboard = () => {
  const [tab, setTab] = useState(0);

  const { data: surveyReport, loading: surveyReportLoading } =
    useGetSurveyReport();

  const getBusinessType = (field, type) => {
    const businessType = surveyReport?.filter((data) => data?.[field] === type);
    return businessType?.length;
  };

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className="main-container">
      <Tabs value={tab} onChange={handleTabChange}>
        <Tab label="Intrested" />
        <Tab label="Not Intrested" />
      </Tabs>
      {tab === 0 && (
        <div className="business-container">
          <div className="business-card">
            <p>Total No. of Franchise Laundary</p>
            <p>{getBusinessType("business_type", "Franchise")}</p>
          </div>
          <div className="business-card">
            <p>Total No. of Owned Laundary</p>
            <p>{getBusinessType("business_type", "Owned")}</p>
          </div>
          <div className="business-card">
            <p>Total No. of Self Service Provider</p>
            <p>{getBusinessType("service_provider", "Self")}</p>
          </div>
          <div className="business-card">
            <p>Total No. of Third Party Service Provider</p>
            <p>{getBusinessType("service_provider", "Third Party")}</p>
          </div>
        </div>
      )}
      <SurveyTable data={surveyReport} tab={tab} />
    </div>
  );
};

export default Dashboard;
