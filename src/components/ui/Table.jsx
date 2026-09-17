import "./Table.css";

function Table({ columns, data, striped = false }) {
  return (
    <table className={`table ${striped ? "striped" : ""}`}>

      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>
              {column}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>

            {columns.map((column) => (
              <td key={column}>
                {row[column.toLowerCase()]}
              </td>
            ))}

          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default Table;