import { getUserDetails } from "../(auth)/_lib/utils";
import { UserProvider } from "./_components/UserContext";

export const metadata = {
  title: "DashboardLayout",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserDetails();
  return <UserProvider user={user}>{children}</UserProvider>;
}
