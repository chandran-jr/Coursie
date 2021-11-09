import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";

const UniGraph = ({data}) => {

  const [parent,setParent] = useState([]);

    useEffect(() => {
        setParent(data.map(res => {return res['Universities/Institutions']}));
    },[data])
      
    const uniqueParent = ([...new Set(parent)])
    var parentLength = uniqueParent.length;
    const aCount = new Map([...new Set(parent)].map(
        x => [x, parent.filter(y => y === x).length]
    ));
    const parentCount=[]
    for (var i=0;i<parentLength;i++){
        parentCount.push(aCount.get(uniqueParent[i]))
    }
    const series = [
        {
          name: "Parent subject", //will be displayed on the y-axis
          data: parentCount,
        }
      ];

      const colors = ["#269FFB","#26E7A5","#FEBB3B","#FF6077","#8B75D7","#6D838D","#46B3A9","#D730EB"];
      
      const options = {
        chart: {
          id: "simple-bar"
        },

        dataLabels: {
          enabled: true
        },
        legend: {
          show: true,
          position: 'top',
        },

        colors: colors,
            plotOptions: {
              bar: {
                columnWidth: '45%',
                distributed: true,
              }
            },
        
        xaxis: {
          categories: uniqueParent,
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


export default UniGraph
