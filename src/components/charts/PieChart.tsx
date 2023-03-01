import React from "react";
import { Box, Typography, Stack } from "@pankod/refine-mui";

import { PieChartProps } from "interfaces/home";
import ReactApexChart from "react-apexcharts";

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
  return (
    <Box className="flex flex-1 bg-[#fcfcfc] flex-row justify-between align-center pl-4 py-2 gap-2 rounded-2xl m-h-[110px] w-fit">
      <Stack direction="column">
        <Typography className="text-sm text-[#818191]">{title}</Typography>
        <Typography className="text-2xl text-[#11142d] font-bold mt-2">
          {value}
        </Typography>
      </Stack>
      <ReactApexChart
        options={{
          chart: {
            type: "donut",
          },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </Box>
  );
};

export default PieChart;
