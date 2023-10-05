import React from "react";
import useGetSurveyReport, {
  useGetSurveyAnalyticsReport,
} from "../../services/apiQueries/dashboard";
import AnalyticCard from "../../components/AnalyticCard";
import "./dashboard.css";
import CustomTable from "../../components/CustomTable";

const Dashboard = () => {
  const { data: surveyReport, loading: surveyReportLoading } =
    useGetSurveyReport();
  const { data: surveyAnalyticsReport, loading: surveyAnalyticsReportLoading } =
    useGetSurveyAnalyticsReport();

  const getBusinessType = (field, type) => {
    const businessType = surveyReport?.filter((data) => data?.[field] === type);
    return businessType?.length;
  };

  const columnData = [
    {
      key: "business_name",
      title: "Business Name",
    },
    {
      key: "business_type",
      title: "Business Type",
    },
    {
      key: "service_provider",
      title: "Service Provider",
    },
    {
      key: "address",
      title: "Address",
    },
    {
      key: "average_ticket_size",
      title: "Avg. Ticket Size",
    },
    {
      key: "average_order_per_day",
      title: "Ag. Order Per Day",
    },
    {
      key: "average_revenue_monthly",
      title: "Avg. Revenue Monthly",
    },
    {
      key: "profit_margin",
      title: "Profit Margin(%)",
    },
    {
      key: "wash_fold_press_percent",
      title: "Wash, Fold & Press(%)",
    },
    {
      key: "dryclean_percent",
      title: "Dry Clean(%)",
    },
    {
      key: "shoe_clean_percent",
      title: "Shoe Clean(%)",
    },
    {
      key: "carpet_clean_percent",
      title: "Carpet Clean(%)",
    },
    {
      key: "rent",
      title: "Rent",
    },
    {
      key: "electricity_bill",
      title: "Electricity Bill",
    },
    {
      key: "work_barrier",
      title: "Barriers",
    },
  ];

  return (
    <div className="main-container">
      <p className="heading">Survey-Analytics</p>
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
      <div className="analytic-container">
        <AnalyticCard
          title="Avreage"
          type="average"
          data={surveyAnalyticsReport}
        />
        <AnalyticCard title="Min" type="min" data={surveyAnalyticsReport} />
        <AnalyticCard title="Max" type="max" data={surveyAnalyticsReport} />
      </div>
      <CustomTable data={surveyReport} column={columnData} />
    </div>
  );
};

export default Dashboard;
