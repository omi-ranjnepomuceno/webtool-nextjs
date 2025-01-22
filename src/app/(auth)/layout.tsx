export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EFF5F8] p-4 lg:p-16">
      {children}
    </div>
  );
}
