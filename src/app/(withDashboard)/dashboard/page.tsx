import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return <div>This is dashboard page.</div>;
};

export default DashboardPage;
