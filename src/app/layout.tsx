import "../styles/theme/globals.css";
import "@radix-ui/themes/styles.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div className="dark bg-darkBackground">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
