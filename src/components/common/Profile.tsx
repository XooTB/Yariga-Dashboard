import { Email, Phone, Place } from "@mui/icons-material";
import { Box, Stack, Typography } from "@pankod/refine-mui";

import { ProfileProps, PropertyProps } from "interfaces/common";
import PropertyCard from "./PropertyCard";

function checkImage(url: any) {
  const img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
}

const Profile = ({ type, name, avatar, email, properties }: ProfileProps) => (
  <Box>
    <Typography className="text-2xl font-bold text-black">
      {type} Profile
    </Typography>

    <Box className="mt-5 rounded-2xl p-5 bg-white">
      <Box className="flex sm:flex-col lg:flex-row xl:flex-row gap-2.5">
        <img
          src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="abstract"
          className="my_profile-bg w-80 h-80"
        />
        <Box className="flex flex-1 sm:ml-5 lg:mt-14 lg:ml-0">
          <Box className="flex flex-1 sm:flex-col lg:flex-row xl:flex-row gap-5">
            <img
              src={
                checkImage(avatar)
                  ? avatar
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
              }
              alt="user_profile"
              className="my_profile_user-img w-20 h-20"
            />

            <Box className="flex flex-1 flex-col justify-between gap-7">
              <Stack className="flex flex-col">
                <Typography className="text-2xl font-semibold text-black">
                  {name}
                </Typography>
                <Typography className="text-base text-gray">
                  Realestate Agent
                </Typography>
              </Stack>

              <Stack className="flex flex-col gap-7">
                <Stack className="gap-4">
                  <Typography className="text-sm font-medium text-gray">
                    Address
                  </Typography>
                  <Box className="flex flex-row items-center gap-2">
                    <Place sx={{ color: "#11142D" }} />
                    <Typography className="text-sm text-black">
                      4517 Washington Ave. Manchaster, Kentucky 39495
                    </Typography>
                  </Box>
                </Stack>

                <Stack className="flex flex-row flex-warp gap-5 pb-4">
                  <Stack className="flex gap-4">
                    <Typography className="text-sm font-medium text-gray">
                      Phone Number
                    </Typography>
                    <Box className="flex flex-row items-center gap-2">
                      <Phone sx={{ color: "#11142D" }} />
                      <Typography className="text-sm text-black" noWrap>
                        +0123 456 7890
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack className="flex flex-1 gap-4">
                    <Typography className="text-sm font-medium text-gray">
                      Email
                    </Typography>
                    <Box className="flex flex-row items-center gap-2">
                      <Email className="text-black" />
                      <Typography className="text-sm text-black">
                        {email}
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

    {properties.length > 0 && (
      <Box className="mt-2.5 rounded-2xl p-5 bg-white">
        <Typography
          color="#11142D"
          className="text-lg font-semibold text-black"
        >
          {type} Properties
        </Typography>

        <Box className="mt-2.5 flex flex-wrap gap-2.5">
          {properties?.map((property: PropertyProps) => (
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
    )}
  </Box>
);

export default Profile;
