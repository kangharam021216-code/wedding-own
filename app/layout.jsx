import "./globals.css";

export const metadata = {
  title: "OWN CRM",
  description: "웨딩 베뉴 CRM 스타터",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
