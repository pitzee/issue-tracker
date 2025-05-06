import { Pencil1Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditissueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <Pencil1Icon />
      <Link href={`/issues/${issueId}/edit`}>Edit issue</Link>
    </Button>
  );
};

export default EditissueButton;
