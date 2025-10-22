import "./globals.css"; 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
        <title>Portfolio | Rayan</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
