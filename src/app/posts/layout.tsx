import RoleSwitcher from "@/components/RoleSwitcher";
import { RoleProvider } from "@/context/RoleContext";
import { Theme } from "@radix-ui/themes";

import Link from "next/link";

const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Theme>
      <RoleProvider>
        <div className="dark bg-darkBackground text-darkText min-h-screen p-4">
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <h1 className="text-2xl font-bold">My Blog</h1>
            </Link>
            <RoleSwitcher />
          </div>
          <hr className="my-4 border-darkForeground" />
          <div>{children}</div>
        </div>
      </RoleProvider>
    </Theme>
  );
};

export default PostsLayout;
