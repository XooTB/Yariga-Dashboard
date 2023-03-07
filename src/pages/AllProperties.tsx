import { Add } from "@mui/icons-material";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { useTable } from "@pankod/refine-core";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { PropertyCard, CustomButton } from "components";

const AllProperties = () => {
  const navigate = useNavigate();

  const {
    tableQueryResult: { data, isLoading, isError },
  } = useTable();

  const allProperties = data?.data ?? [];

  if (isLoading) {
    return <Typography>Loading....</Typography>;
  }
  if (isError) {
    return <Typography>Error...</Typography>;
  }
  return (
    <Box>
      <Stack className="flex-row justify-between items-center">
        <Typography className="text-2xl font-bold text-[#11142D]">
          All Properties
        </Typography>
        <CustomButton
          title="Add Property"
          handleClick={() => navigate("/properties/create")}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>

      <Box className="mt-5 flex flex-wrap gap-3">
        {allProperties.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            location={property.location}
            photo={property.photo}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AllProperties;
