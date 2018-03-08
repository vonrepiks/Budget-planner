import React from 'react';
import BasicLayout from './layout/BasicLayout';

class MonthlyBalance extends React.Component {

  getForm() {
    return (
      <div className="container">
        <div className="row space-top">
          <div className="col-md-12">
            <h1>Welcome to Budget Planner</h1>
          </div>
        </div>
        <div className="row space-top ">
          <div className="col-md-12 ">
            <div className="card bg-secondary">
              <div className="card-body">
                <blockquote className="card-blockquote">
                  <h2 id="month">November 2017</h2>
                  <div className="row">
                    <div className="col-md-3 space-top">
                      <h4>Planner</h4>
                      <form>
                        <div className="form-group">
                          <label className="form-control-label" htmlFor="income">Income:</label>
                          <input className="form-control" name="income" type="number" />
                        </div>
                        <div className="form-group">
                          <label className="form-control-label" htmlFor="budget">Budget:</label>
                          <input className="form-control" name="budget" type="number" />
                        </div>
                        <input type="submit" className="btn btn-secondary" value="Save" />
                      </form>
                    </div>
                    <div className="col-md-8 space-top">
                      <div className="row">
                        <h4 className="col-md-9">Expenses</h4>
                        <a href="expenses.html" className="btn btn-secondary ml-2 mb-2">Add expenses</a>
                      </div>
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Cost</th>
                            <th>Payment Date</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Snacks</td>
                            <td>Non-essential</td>
                            <td>15.00</td>
                            <td>30-11-2017</td>
                            <td>
                              <a href="delete" className="btn btn-secondary">Delete</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Rent</td>
                            <td>Fixed</td>
                            <td>330.00</td>
                            <td>15-11-2017</td>
                            <td>
                              <a href="delete" className="btn btn-secondary">Delete</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Gasoline</td>
                            <td>Variable</td>
                            <td>50.00</td>
                            <td>-</td>
                            <td>
                              <a href="delete" className="btn btn-secondary">Delete</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const content = this.getForm();

    return <BasicLayout content={content} />
  }
}

export default MonthlyBalance;
