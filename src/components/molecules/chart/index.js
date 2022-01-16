import React from 'react'
import './chart.scss'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = (props) => {
  const data = [
    {
      name: 'Jan',
      awal_bulan: 10,
      akhir_bulan: 17,
      // amt: 2400,
    },
    {
      name: 'Feb',
      awal_bulan: 11,
      akhir_bulan: 5,
      // amt: 2210,
    },
    {
      name: 'Mar',
      awal_bulan: 10,
      akhir_bulan: 5,
      // amt: 2290,
    },
    {
      name: 'Apr',
      awal_bulan: 27,
      akhir_bulan: 10,
      // amt: 2000,
    },
    {
      name: 'Mei',
      awal_bulan: 18,
      akhir_bulan: 33,
      // amt: 2181,
    },
    {
      name: 'Jun',
      awal_bulan: 23,
      akhir_bulan: 23,
      // amt: 2500,
    },
    {
      name: 'Jul',
      awal_bulan: 34,
      akhir_bulan: 70,
      // amt: 2100,
    },
    {
      name: 'Agu',
      awal_bulan: 34,
      akhir_bulan: 43,
      // amt: 2100,
    },
    {
      name: 'Sep',
      awal_bulan: 13,
      akhir_bulan: 17,
      // amt: 2100,
    },
    {
      name: 'Okt',
      awal_bulan: 10,
      akhir_bulan: 14,
      // amt: 2100,
    },
    {
      name: 'Nov',
      awal_bulan: 5,
      akhir_bulan: 9,
      // amt: 2100,
    },
    {
      name: 'Des',
      awal_bulan: 6,
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
          <Bar dataKey="awal_bulan" fill="#282052" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
