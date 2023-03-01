import { useList } from "@pankod/refine-core";
import { Box, Typography, Stack } from "@pankod/refine-mui";
import {
  PieChart,
  PropertyRefferals,
  PropertyCard,
  TotalRevenue,
  TopAgent,
} from "components";

const Home = () => {
  return (
    <Box className="">
      <Typography className="text-2xl font-bold text-[#11142D]">
        Dashboard
      </Typography>
      <Box className="mt-10 flex flex-wrap gap-4">
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </Box>
      <Stack
        className="mt-5 w-full gap-4"
        direction={{ xs: "column", lg: "row" }}
      >
        <TotalRevenue />
        <PropertyRefferals />
      </Stack>
    </Box>
  );
};

export default Home;
