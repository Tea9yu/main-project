// src/pages/DashboardPage.js

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { useTable } from 'react-table';

// 예시 데이터
const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '판매건수',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

// 예시 데이터
const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Revenue',
      fill: true,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 2,
      data: [1000, 1500, 1200, 2000, 1800, 2200, 2500]
    }
  ]
};

// 예시 데이터
const tableData = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Bob Johnson', age: 40 },
  { id: 4, name: 'Alice Williams', age: 35 }
];

const DashboardPage = () => {
  // 테이블 컴포넌트
  const Table = ({ columns, data }) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable({
      columns,
      data
    });

    return (
      <table {...getTableProps()} style={{ border: '1px solid black', borderCollapse: 'collapse', margin: '20px' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} style={{ border: '1px solid black', padding: '8px', background: 'lightgray' }}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
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
  };

  return (
    <div className='mt-20'>
      <h1>대시보드</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          <Bar
            data={chartData}
            options={{
              title: {
                display: true,
                text: 'Sales Report',
                fontSize: 20
								
              },
              legend: {
                display: true,
                position: 'right'
              },
							maintainAspectRatio: false,
            }}
          />
        </div>
        <div style={{ width: '50%' }}>
          <Line
            data={lineChartData}
            options={{
              title: {
                display: true,
                text: 'Revenue Report',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              },
							maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
      <Table columns={[{ Header: 'ID', accessor: 'id' }, { Header: 'Name', accessor: 'name' }, { Header: 'Age', accessor: 'age' }]} data={tableData} />
    </div>
  );
}

export default DashboardPage;



// import React from 'react'

// export default function AdminPage() {
// 	return (
// 		<div className='mt-20'>
// 			<div className='flex flex-col gap-5'>
// 				<h1>구매데이터</h1>
// 				<div className='flex'>
// 					<div className='flex gap-5'>
// 						<div>
// 							구매데이터1
// 						</div>
// 						<div>
// 							구매데이터2
// 						</div>
// 					</div>
// 				</div>
// 				<h1>추천 데이터</h1>
// 				<div className='flex gap-5'>
// 					<div>
// 						추천데이터1
// 					</div>
// 					<div>
// 						추천데이터2
// 					</div>
// 				</div>
// 			</div>
// 			<div>
// 				매출액
// 			</div>
// 			<div className='flex gap-5'>
// 				<div>
// 					박스1
// 				</div>
// 				<div>
// 					박스2
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
