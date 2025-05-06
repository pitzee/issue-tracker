import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import prisma from "../../../../prisma/client";
import { Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex gapX={"3"} gapY={"2"}>
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt-4>
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil1Icon />
          <Link href={`/issues/${issue.id}/edit`}>Edit issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
