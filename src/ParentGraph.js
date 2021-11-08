import React from 'react';
import ReactApexChart from "react-apexcharts";

const ParentGraph = ({data}) => {
    const series = [
        {
          name: "Parent subject", //will be displayed on the y-axis
          data: [21, 22, 10, 28, 16, 21, 13, 30],
        }
      ];

     const colors = ["#269FFB","#26E7A5","#FEBB3B","#FF6077","#8B75D7","#6D838D","#46B3A9","#D730EB"];
      
      const options = {
        chart: {
          id: "simple-bar",
        },



        xaxis: {
          categories: [
            ['John', 'Doe'],
            ['Joe', 'Smith'],
            ['Jake', 'Williams'],
            'Amber',
            ['Peter', 'Brown'],
            ['Mary', 'Evans'],
            ['David', 'Wilson'],
            ['Lily', 'Roberts'], 
          ], 
          labels: {
            style: {
              colors: colors,
              fontSize: '14px'
            }
          }
        }
      };
      return (
        <div>
          <ReactApexChart options={options} type="bar" series={series} width="220%" />
        </div>
      );
};


export default ParentGraph
