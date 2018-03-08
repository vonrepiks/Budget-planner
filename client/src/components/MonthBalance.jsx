import React from 'react';

const MonthBalance = (props) => {
  return (
    <div className="col-md-3">
      <div className="card text-white bg-secondary">
        <div className="card-body">
          <blockquote className="card-blockquote">
            <h2>{props.month}</h2>
            <h4>Year {props.year}</h4>
            <label htmlFor="budget">Budget:</label>
            <input className="col-md-9" name="budget" disabled />
            <label htmlFor="balance">Balance:</label>
            <input className="col-md-9" name="balance" disabled />
            <div className="space-top">
              <a href="monthly.html" className="btn btn-secondary">Details</a>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default MonthBalance;
