/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function BookinsRow({ booking, handleDelete }) {
  const { _id, name, email, date, price, service } = booking;

  return (
    <div>
      <tr>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <h2>{name}</h2>
        </td>
        <td>{email}</td>
        <td>{date}</td>
        <td>${price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
}
