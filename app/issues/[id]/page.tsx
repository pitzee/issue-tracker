import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import prisma from "../../../../prisma/client";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gapX={"3"} gapY={"2"}>
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt-4>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
