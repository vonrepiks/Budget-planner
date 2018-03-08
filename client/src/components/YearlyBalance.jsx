import React from 'react';
import MonthBalance from './MonthBalance';
import BasicLayout from './layout/BasicLayout';

class YearlyBalance extends React.Component {

  getForm() {
    return (
      <div className="container">
        <div className="row space-top">
          <div className="col-md-12">
            <h1>Yearly Balance</h1>
          </div>
        </div>
        <div className="row space-top col-md-12">
          <MonthBalance month="November" year={2017} />
          <MonthBalance month="December" year={2017} />
          <MonthBalance month="January" year={2018} />
          <MonthBalance month="February" year={2018} />
        </div>
        <div className="row space-top col-md-12">
          <MonthBalance month="March" year={2018} />
          <MonthBalance month="April" year={2018} />
          <MonthBalance month="May" year={2018} />
          <MonthBalance month="June" year={2018} />
        </div>
        <div className="row space-top col-md-12">
          <MonthBalance month="July" year={2018} />
          <MonthBalance month="August" year={2018} />
          <MonthBalance month="September" year={2018} />
          <MonthBalance month="October" year={2018} />
        </div>
      </div>
    );
  }

  render() {
    const content = this.getForm();

    return <BasicLayout content={content} />
  }
}

export default YearlyBalance;
