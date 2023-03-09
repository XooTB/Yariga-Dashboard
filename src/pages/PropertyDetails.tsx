import React from "react";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { useDelete, useGetIdentity, useShow } from "@pankod/refine-core";
import { useNavigate, useParams } from "@pankod/refine-react-router-v6";
import {
  ChatBubble,
  Delete,
  Edit,
  Phone,
  Place,
  Star,
} from "@mui/icons-material";
import { CustomButton } from "components";

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const { id } = useParams();
  const { mutate } = useDelete();
  const { queryResult } = useShow();

  const { data, isLoading, isError } = queryResult;
  const propertyDetails = data?.data ?? {};

  if (isLoading) {
    return <div>Loading.....</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  const checkImage = (url: string) => {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
  };

  const isCurrentUser = user.email === propertyDetails.creator.email;

  const handleDelete = () => {
    const response = confirm("Are you sure you want to delete this property?");
    if (response) {
      mutate(
        {
          resource: "properties",
          id: id as string,
        },
        {
          onSuccess: () => {
            navigate("/properties");
          },
        }
      );
    }
  };

  //
  return (
    <Box className="rounded-2xl p-5 bg-[#FCFCFC] w-full">
      <Typography className="text-2xl font-bold text-[#11142D]">
        Details
      </Typography>
      <Box className="mt-3 flex sm:flex-col lg:flex-row gap-4 xl:flex-row">
        <Box className="flex-1 max-w-5xl">
          <img
            src={propertyDetails.photo}
            alt={propertyDetails.title}
            height={546}
            style={{ objectFit: "cover", borderRadius: "10px" }}
            className="property_details.img"
          />
          <Box>
            <Stack className="flex flex-row justify-between flex-wrap items-center ">
              <Typography className="text-lg font-medium text-[#11142D] capitalize">
                {propertyDetails.propertyType}
              </Typography>
              <Box>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={`star-${star}`} sx={{ color: "#F2C94C" }} />
                ))}
              </Box>
            </Stack>
            <Stack className="flex flex-row justify-between flex-wrap items-center ">
              <Box>
                <Typography className="text-2xl font-semibold text-[#11142D] capitalize ml-1">
                  {propertyDetails.title}
                </Typography>
                <Stack className="flex flex-row mt-2 items-center gap-1">
                  <Place sx={{ color: "#808191" }} />
                  <Typography className="text-sm text-[#808191]">
                    {propertyDetails.location}
                  </Typography>
                </Stack>
              </Box>

              {/*  */}
              <Box>
                <Typography className="text-base font-semibold mt-3 text-[#11142D]">
                  Price
                </Typography>
                <Stack className="flex flex-row items-end gap-1">
                  <Typography className="text-2xl font-bold text-[#475BE8]">
                    ${propertyDetails.price}
                  </Typography>
                  <Typography className="text-sm text-[#808191] mb-2">
                    all inclusive
                  </Typography>
                </Stack>
              </Box>
            </Stack>

            <Stack className="mt-6 flex flex-col gap-3">
              <Typography className="text-lg text-[#11142D]">
                Description
              </Typography>
              <Typography className="text-sm text-[#808191]">
                {propertyDetails.description}
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Box className="w-full flex flex-1 max-w-xs flex-col gap-5">
          <Stack
            border="1px solid #E4E4E4"
            className="w-full p-2 flex flex-col justify-center items-center rounded-lg"
          >
            <Stack className="mt-2 justify-center items-center text-center">
              <img
                src={
                  checkImage(propertyDetails.creator.avatar)
                    ? propertyDetails.creator.avatar
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                }
                alt="avatar"
                width={90}
                height={90}
                style={{
                  borderRadius: "100%",
                  objectFit: "cover",
                }}
              />

              <Box mt="15px">
                <Typography className="text-lg font-semibold text-[#11142D]">
                  {propertyDetails.creator.name}
                </Typography>
                <Typography className="mt-1 text-sm font-normal text-[#808191]">
                  Agent
                </Typography>
              </Box>

              <Stack className="mt-4 flex flex-row items-center gap-1">
                <Place sx={{ color: "#808191" }} />
                <Typography className="text-sm font-normal text-[#808191]">
                  Dhaka, BD
                </Typography>
              </Stack>

              <Typography mt={1} fontSize={16} fontWeight={600} color="#11142D">
                {propertyDetails.creator.allProperties.length} Properties
              </Typography>
            </Stack>
            <Stack className="w-full mt-6 flex flex-row flex-wrap gap-2">
              <CustomButton
                title={!isCurrentUser ? "Message" : "Edit"}
                backgroundColor="#475BE8"
                color="#FCFCFC"
                fullWidth
                icon={!isCurrentUser ? <ChatBubble /> : <Edit />}
                handleClick={() => {
                  if (isCurrentUser) {
                    navigate(`/properties/edit/${propertyDetails._id}`);
                  }
                }}
              />
              <CustomButton
                title={!isCurrentUser ? "Call" : "Delete"}
                backgroundColor={!isCurrentUser ? "#2ED480" : "#d42e2e"}
                color="#FCFCFC"
                fullWidth
                icon={!isCurrentUser ? <Phone /> : <Delete />}
                handleClick={() => {
                  if (isCurrentUser) handleDelete();
                }}
              />
            </Stack>
          </Stack>
          <Stack>
            <img
              src="https://serpmedia.org/scigen/images/googlemaps-nyc-standard.png?crc=3787557525"
              className="w-full h-80 rounded-xl object-cover"
            />
          </Stack>

          <Box>
            <CustomButton
              title="Book Now"
              backgroundColor="#475BE8"
              color="#FCFCFC"
              fullWidth
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;
