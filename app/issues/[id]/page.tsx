import { notFound } from "next/navigation";
import prisma from "../../../prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import IssueDetailWrapper from "./IssueDetailWrapper";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return <IssueDetailWrapper issue={issue} isLoggedIn={!!session} />;
};

export default IssueDetailPage;
