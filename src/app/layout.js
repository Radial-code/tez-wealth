import "./globals.css";

export const metadata = {
  title: "Tez Wealth",
  description: "Achieve Financial Freedom with AI-Powered Insights",
  openGraph: {
    type: "website",
    url: "https://tez-wealth-navy.vercel.app/",
    title: "Tez Wealth",
    description: "Achieve Financial Freedom with AI-Powered Insights",
    images: [
      {
        url: "https://thumbs2.imgbox.com/7e/5a/YQUqs195_t.png",
        width: 800,
        height: 600,
        alt: "Tez Wealth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://tez-wealth-navy.vercel.app/",
    title: "Tez Wealth",
    description: "Achieve Financial Freedom with AI-Powered Insights",
    images: [
      "https://thumbs2.imgbox.com/7e/5a/YQUqs195_t.png",
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
