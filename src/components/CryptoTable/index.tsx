import React from "react";

import "./CryptoTable.scss";

const TableItem = () => {
  return (
    <tr className="tableItem">
      <th className="tableItem__item">Bitcoin</th>
      <th className="tableItem__item">256852</th>
      <th className="tableItem__item">+12.19%</th>
      <th className="tableItem__item">Dynamic</th>
    </tr>
  );
};

function CryptoTable() {
  return (
    <table className="cryptoTable">
      <thead className="cryptoTable_head">
        <tr className="cryptoTable_head--tr">
          <th className="cryptoTable_head--th">Market</th>
          <th className="cryptoTable_head--th">Price</th>
          <th className="cryptoTable_head--th">Change 24H</th>
          <th className="cryptoTable_head--th">Dynamic</th>
        </tr>
      </thead>
      <tbody >
        <TableItem />
        <TableItem />
      </tbody>
    </table>
  );
}

export default CryptoTable;
