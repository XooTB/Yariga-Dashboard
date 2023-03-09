import React from "react";
import { Profile } from "components";
import { useGetIdentity, useOne } from "@pankod/refine-core";
import { useParams } from "@pankod/refine-react-router-v6";

const AgentProfile = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useOne({
    resource: "user",
    id: id as string,
  });

  const agentProfile = data?.data ?? [];

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (isError) {
    return <div>Error....</div>;
  }
  console.log(agentProfile);
  return (
    <Profile
      type="Agent"
      name={agentProfile.name}
      email={agentProfile.email}
      avatar={agentProfile.avatar}
      properties={agentProfile.allProperties}
    />
  );
};

export default AgentProfile;
