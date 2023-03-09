import { Email } from "@mui/icons-material";
import { useList } from "@pankod/refine-core";
import { Box, Typography } from "@pankod/refine-mui";

import { AgentCard } from "components";

const Agents = () => {
  const { data, isLoading, isError } = useList({ resource: "user" });
  const allAgents = data?.data ?? [];

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <Box>
      <Typography className="text-2xl font-bold text-[#11142D]">
        Agent List
      </Typography>
      <Box className="mt-5 flex flex-wrap gap-5 bg-[#ececec]">
        {allAgents.map((agent) => (
          <AgentCard
            key={agent._id}
            id={agent._id}
            name={agent.name}
            email={agent.email}
            avatar={agent.avatar}
            noOfProperties={agent.allProperties.length}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Agents;
