import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Arwildo</title>
        <meta name="description" content="Software Engineer with over 6 years in full-stack development, specializing in creating scalable software solutions and web applications for businesses, hospitals, clinics, and various institutions. Delivering innovative, reliable, and efficient digital solutions tailored to your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Arwildo" />
        <meta property="og:description" content="Software Engineer with over 6 years in full-stack development, specializing in creating scalable software solutions and web applications for businesses, hospitals, clinics, and various institutions. Delivering innovative, reliable, and efficient digital solutions tailored to your needs." />
        <meta property="og:image" content="/images/logo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arwildo.com/" />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="0c641c91-29c8-40df-8aad-014c850d0743"></script>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}