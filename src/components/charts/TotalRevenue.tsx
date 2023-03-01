import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@pankod/refine-mui";
import { ArrowCircleUpRounded } from "@mui/icons-material";
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";

const TotalRevenue = () => {
  return (
    <Box className="p-4 bg-[#FCFCFC] flex flex-1 flex-col rounded-2xl">
      <Typography className="text-lg font-semibold text-[#11142D] ">
        Total Revenue
      </Typography>
      <Stack className="my-5 gap-4 flex-wrap" direction="row">
        <Typography className="text-2xl font-bold text-[#11142D]">
          $255,897
        </Typography>
        <Stack className="flex-row items-center gap-2">
          <ArrowCircleUpRounded className="text-2xl text-[#475be8]" />
          <Stack>
            <Typography className="text-lg text-[#475be8]">0.8%</Typography>
            <Typography className="text-xs text-[#08191]">
              Than Last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  );
};

export default TotalRevenue;
