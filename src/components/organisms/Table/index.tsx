'use client'
import { ListItem } from "@mui/material";
import { keys } from "@mui/system";
import React, { useState, useEffect } from "react"
import { Employee } from "types/employee";


type TableProps<T> = {
    list : T[];
}

const Table = <T extends Record<string, any>>({list}:TableProps<T>) => {

  return (
    <>
    <div className="container-sm">
      <table className="table table-hover">
        <thead>
          <tr>
            {Object.keys(list[0]).map((key, index) => (
              <th key={index} scope="col">{key}</th>
            ))}
          </tr>
        </thead>
          <tbody>
            {list.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(item).map((value, cellIndex) => (
                  <td key={cellIndex}>{value}</td>
            ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
