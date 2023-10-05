import React, { useEffect, useState } from "react";
import CustomTable from "../CustomTable";

const SurveyTable = ({ data = [], tab }) => {
  const [intrestedData, setIntrestedData] = useState([]);
  const [notIntrestedData, setNotIntrestedData] = useState([]);
  const [surveyData, setSurveyData] = useState([]);
  const [columnData, setColumnData] = useState([]);

  const fieldToValidate = [
    "average_ticket_size",
    "average_order_per_day",
    "wash_fold_press_percent",
    "dryclean_percent",
    "shoe_clean_percent",
    "carpet_clean_percent",
  ];

  useEffect(() => {
    if (tab === 0) {
      setColumnData(intrestedColumnData);
      setSurveyData([...intrestedData]);
    } else {
      setColumnData(notIntrestedColumnData);
      setSurveyData([...notIntrestedData]);
    }
  }, [tab]);

  useEffect(() => {
    const intestedPeopleData = [];
    const notIntrestedPeopleData = [];
    for (const obj of data) {
      let hasNullFields = false;
      for (const field of fieldToValidate) {
        if (obj[field] === null || obj[field] === "") {
          hasNullFields = true;
          break;
        }
      }
      if (hasNullFields) {
        notIntrestedPeopleData.push(obj);
      } else {
        intestedPeopleData.push(obj);
      }
    }
    setIntrestedData([...intestedPeopleData]);
    setNotIntrestedData([...notIntrestedPeopleData]);
    if (tab === 0) {
      setSurveyData([...intestedPeopleData]);
    } else {
      setSurveyData([...notIntrestedPeopleData]);
    }
  }, [data, tab]);

  const notIntrestedColumnData = [
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
  ];

  const intrestedColumnData = [
    ...notIntrestedColumnData,
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

  return <CustomTable data={surveyData} column={columnData} />;
};

export default SurveyTable;
