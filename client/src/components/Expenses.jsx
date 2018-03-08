import React from 'react';

const Expenses = () => {
  return (
    <div className="container">
      <div className="row space-top">
        <div className="col-md-12">
          <h1>Add Expenses</h1>
          <h3>November 2017</h3>
        </div>
      </div>
      <div className="row space-top">
        <div className="col-md-10">
          <form>
            <legend>Add a new expense</legend>
            <div className="form-group">
              <label className="col-md-2" htmlFor="name">Name:</label>
              <input className="col-md-2" name="name" type="text" />
            </div>
            <div className="form-group">
              <label className="col-md-2" htmlFor="category">Category:</label>
              <select className="col-md-2 pl-2" name="category">
                <option>Non-essential</option>
                <option>Fixed</option>
                <option>Variable</option>
              </select>
            </div>
            <div className="form-group">
              <label className="col-md-2" htmlFor="cost">Cost:</label>
              <input className="col-md-2" name="cost" type="number" />
            </div>
            <div className="form-group">
              <label className="col-md-2" htmlFor="paymentDate">Payment Date:</label>
              <input className="col-md-2" name="paymentDate" type="text" />
            </div>
            <input type="submit" className="btn btn-secondary" value="Add" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
