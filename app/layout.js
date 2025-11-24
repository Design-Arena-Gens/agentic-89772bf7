export const metadata = {
  title: 'Groupe Chikhoune ? Excellence, Qualit? & Innovation',
  description: "Groupe agroalimentaire alg?rien : excellence, qualit? et innovation.",
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div id="__app">{children}</div>
      </body>
    </html>
  );
}

import './globals.css';
