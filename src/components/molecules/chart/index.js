import React from 'react'
import './chart.scss'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = (props) => {
  const data = [
    {
      name: 'Jan',
      akhir_bulan: 17,
      // amt: 2400,
    },
    {
      name: 'Feb',
      akhir_bulan: 5,
      // amt: 2210,
    },
    {
      name: 'Mar',
      akhir_bulan: 5,
      // amt: 2290,
    },
    {
      name: 'Apr',
      akhir_bulan: 10,
      // amt: 2000,
    },
    {
      name: 'Mei',
      akhir_bulan: 33,
      // amt: 2181,
    },
    {
      name: 'Jun',
      akhir_bulan: 23,
      // amt: 2500,
    },
    {
      name: 'Jul',
      akhir_bulan: 70,
      // amt: 2100,
    },
    {
      name: 'Agu',
      akhir_bulan: 43,
      // amt: 2100,
    },
    {
      name: 'Sep',
      akhir_bulan: 17,
      // amt: 2100,
    },
    {
      name: 'Okt',
      akhir_bulan: 14,
      // amt: 2100,
    },
    {
      name: 'Nov',
      akhir_bulan: 9,
      // amt: 2100,
    },
    {
      name: 'Des',
      akhir_bulan: 3,
      // amt: 2100,
    },
  ];

  return (
    <div className="chart">
      <h3>Laporan Bulanan</h3>
      <ResponsiveContainer width="100%" height="100%" aspect={3/1}>
        <BarChart
          width={62}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="akhir_bulan" fill="#FF6F1E" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
