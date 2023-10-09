import React, { useState } from "react";
import useGetSurveyReport from "../../services/apiQueries/dashboard";
import "./dashboard.css";
import { Tab, Tabs } from "@mui/material";
import SurveyTable from "../../components/SurveyTable";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const Dashboard = () => {
  const [tab, setTab] = useState(0);
  const [value, setValue] = useState();

  const { data: surveyReport, loading: surveyReportLoading } =
    useGetSurveyReport(value);

  const getBusinessType = (field, type) => {
    const businessType = surveyReport?.filter((data) => data?.[field] === type);
    return businessType?.length;
  };

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className="main-container">
      <div className="flex-row">
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="Intrested" />
          <Tab label="Not Intrested" />
        </Tabs>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
      </div>
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
