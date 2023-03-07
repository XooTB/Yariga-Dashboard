import React from "react";
import { Place } from "@mui/icons-material";
import { Link } from "@pankod/refine-react-router-v6";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@pankod/refine-mui";
import { PropertyCardProps } from "interfaces/property";

const PropertyCard = ({
  id,
  title,
  price,
  location,
  photo,
}: PropertyCardProps) => {
  return (
    <Card
      component={Link}
      to={`/properties/${id}`}
      className="max-w-xs p-3 hover:shadow-lg cursor-pointer"
      elevation={0}
    >
      <CardMedia
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt="card_img"
        className="rounded-xl"
      />
      <CardContent className="flex flex-row justify-between gap-3 px-1">
        <Stack direction="column" gap={1}>
          <Typography className="text-base font-medium text-[#11142d]">
            {title}
          </Typography>
          <Stack className="flex flex-row items-start gap-1">
            <Place className="text-lg text-[#11142D] mt-1" />
            <Typography className="text-sm text-[#808191]">
              {location}
            </Typography>
          </Stack>
        </Stack>
        <Box className="px-1 py-1 rounded-sm bg-[#dadefa] h-fit">
          <Typography className="text-sm font-semibold text-[#475BE8] ">
            ${price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
