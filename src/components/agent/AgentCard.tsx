import { AgentCardProp, InfoBarProps } from "interfaces/agent";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { EmailOutlined, LocationCity, Phone, Place } from "@mui/icons-material";
import { useGetIdentity } from "@pankod/refine-core";
import { Link } from "@pankod/refine-react-router-v6";

const InfoBar = ({ icon, name }: InfoBarProps) => (
  <Stack className="flex flex-row gap-3 flex-1 flex-wrap sm:min-w-full lg:min-w-[300px]">
    {icon}
    <Typography className="text-base text[#808191]">{name}</Typography>
  </Stack>
);

const AgentCard = ({
  id,
  name,
  email,
  avatar,
  noOfProperties,
}: AgentCardProp) => {
  const { data: currentUser } = useGetIdentity();

  const generateLink = () => {
    if (currentUser.email === email) {
      return "/my-profile";
    }
    return `/agents/show/${id}`;
  };

  return (
    <Box
      component={Link}
      to={generateLink()}
      className="w-full flex sm:flex-col lg:flex-row xl:flex-row gap-5 p-5 hover:shadow-md sm:items-center bg-[#FCFCFC]"
    >
      <img
        src={avatar}
        alt="user"
        className="w-20 h-20 rounded-full object-cover"
      />
      <Stack className="flex flex-col justify-center flex-1 sm:gap-4 lg:gap-2">
        <Stack className="gap-2 flex flex-row flex-wrap justify-start">
          <Typography className="text-2xl font-semibold text-[#11142D]">
            {name}
          </Typography>
          <Typography className="text-sm text-[#808191] mt-1 ml-1">
            Real-Estate Agent
          </Typography>
        </Stack>
        <Stack className="flex flex-row flex-wrap justify-between gap-2">
          <InfoBar
            icon={<EmailOutlined sx={{ color: "#808191" }} />}
            name={email}
          />
          <InfoBar
            icon={<Place sx={{ color: "#808191" }} />}
            name={"Dhaka, BD"}
          />
          <InfoBar
            icon={<Phone sx={{ color: "#808191" }} />}
            name={"+880188XXXXXXX"}
          />
          <InfoBar
            icon={<LocationCity sx={{ color: "#808191" }} />}
            name={`${noOfProperties} Properties`}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCard;
