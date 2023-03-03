import { Add } from "@mui/icons-material";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { useList } from "@pankod/refine-core";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { PropertyCard, CustomButton } from "components";

const AllProperties = () => {
  const navigate = useNavigate();

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
    </Box>
  );
};

export default AllProperties;
