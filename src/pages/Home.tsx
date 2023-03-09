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
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const latestProperties = data?.data ?? [];

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
      <Box className="flex flex-1 rounded-2xl p-5 bg-white flex-col min-w-full mt-6">
        <Typography className="text-lg font-semibold text-black">
          Latest Properties
        </Typography>
        <Box className="mt-2.5 flex flex-wrap gap-4">
          {isLoading ?? <div>Loading....</div>}
          {isError ?? <div>Error..</div>}
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
