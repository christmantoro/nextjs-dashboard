import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts/fonts';

/**
 * Renders the root layout with the provided children.
 *
 * @param {{ children: React.ReactNode }} children - The React nodes to be rendered within the root layout.
 * @return {JSX.Element} The HTML layout with the provided children.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={'${inter.className} antialiased'} >
        {children}
      </body>
    </html>
  );
}
