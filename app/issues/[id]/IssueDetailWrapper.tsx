// components/IssueDetailWrapper.tsx
"use client";

import { Box, Flex, Grid } from "@radix-ui/themes";
import IssueDetails from "./IssueDetails";
import EditissueButton from "./EditissueButton";
import DeleteIssueButton from "./DeleteIssueButton";
import AssigneeSelect from "./AssigneeSelect";

interface Props {
  issue: any;
  isLoggedIn: boolean;
}

const IssueDetailWrapper = ({ issue, isLoggedIn }: Props) => {
  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>

      {isLoggedIn && (
        <Box>
          <Flex direction="column" gap="4">
            <AssigneeSelect issue={issue} />
            <EditissueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export default IssueDetailWrapper;
