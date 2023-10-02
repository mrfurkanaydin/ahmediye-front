import React from 'react';
import { useReactTable } from '@tanstack/react-table';

function MyTable({ columns, data }) {
  const { rows } = useReactTable({
    columns,
    data,
  });

  return (
    <table style={{ border: '1px solid black' }}>
      <thead>
        <tr>
          {columns?.map(column => (
            <th
              style={{
                borderBottom: '2px solid black',
                background: 'aliceblue',
                padding: '8px',
              }}
            >
              {column.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => {
          return (
            <tr>
              {row.cells.map(cell => {
                return (
                  <td
                    style={{
                      padding: '8px',
                      borderBottom: '1px solid black',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default MyTable;
