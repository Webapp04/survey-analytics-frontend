import React from "react";
import "./analyticCard.css";

const AnalyticCard = ({ title, type, data }) => {
  return (
    <div className="analytic-card">
      <p>{title}</p>
      <div className="analytic-card-container">
        <div className="analytic-card-row">
          <p>{title} Order Per Day</p>
          <p>{data?.[`${type}_order_per_day`]}</p>
        </div>
        <div className="analytic-card-row">
          <p>{title} Revenue Montly</p>
          <p>{data?.[`${type}_revenue_monthly`]}</p>
        </div>
        <div className="analytic-card-row">
          <p>{title} Ticket Size</p>
          <p>{data?.[`${type}_ticket_size`]}</p>
        </div>
        <div className="analytic-card-row">
          <p>{title} Carpet Clean Percentage</p>
          <p>{data?.[`${type}_carpet_clean_percent`]}</p>
        </div>
        <div className="analytic-card-row">
          <p>{title} Dry Clean Percentage</p>
          <p>{data?.[`${type}_dryclean_percent`]}</p>
        </div>
        <div className="analytic-card-row">
          <p>{title} Shoe Clean Perecentage</p>
          <p>{data?.[`${type}_shoe_clean_percent`]}</p>
        </div>
        <div className="analytic-card-row">
          <p>{title} Wash, Fold & Press Percentage</p>
          <p>{data?.[`${type}_wash_fold_press_percent`]}</p>
        </div>
        <div className="analytic-card-row">
          <p>{title} Profit Margin</p>
          <p>{data?.[`${type}_profit_margin`]}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticCard;
