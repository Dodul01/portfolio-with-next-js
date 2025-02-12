import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import CreateBlog from "@/components/Dashboard/CreateBlog/CreateBlog";

export default async function CreateBlogPage() {
  const session = await getServerSession(authOptions);

  return <CreateBlog session={session} />;
}
