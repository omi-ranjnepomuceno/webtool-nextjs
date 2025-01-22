export const metadata = {
  title: "DashboardLayout",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children} <p>DashboardLayout</p>
    </>
  );
}
