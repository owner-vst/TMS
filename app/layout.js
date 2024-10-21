export const metadata = {
  title: "ScholarVault",
  description: "Digital Thesis Repository",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
