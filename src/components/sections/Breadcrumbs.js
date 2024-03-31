import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div className="breadcrumbs">
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index}>
          {index > 0 && <span className="separator">/</span>}
          {breadcrumb.link && index < breadcrumbs.length - 1 ? (
            <Link to={breadcrumb.link}>{breadcrumb.label}</Link>
          ) : (
            <span className="active">{breadcrumb.label}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
