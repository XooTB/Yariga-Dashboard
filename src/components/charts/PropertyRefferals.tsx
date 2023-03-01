import { Box, Stack, Typography } from "@pankod/refine-mui";

import { propertyReferralsInfo } from "constants";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => {
  return (
    <Box className="w-full">
      <Stack direction="row" className="flex items-center justify-between">
        <Typography className="text-base font-medium text-[#11142D]">
          {title}
        </Typography>
        <Typography className="text-base font-medium text-[#11142D]">
          {percentage}%
        </Typography>
      </Stack>
      <Box className="mt-2 relative w-full h-2 rounded-sm bg-[#e4e8ef]">
        <Box
          width={`${percentage}%`}
          bgcolor={color}
          position="absolute"
          height="100%"
          borderRadius={1}
        />
      </Box>
    </Box>
  );
};

const PropertyRefferals = () => {
  return (
    <Box className="p-4 bg-[#FCFCFC] rounded-2xl min-w-[490px] flex flex-col">
      <Typography className="text-lg font-semibold text-[#11142D] ">
        Property Referrals
      </Typography>
      <Stack className="my-5 gap-4" direction="column">
        {propertyReferralsInfo.map((bar) => (
          <ProgressBar key={bar.title} {...bar} />
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyRefferals;
