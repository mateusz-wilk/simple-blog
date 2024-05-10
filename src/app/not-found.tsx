import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="grid content-center h-lvh">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link
          className="bg-darkForeground text-darkText px-4 py-2 rounded-lg font-bold transition hover:bg-pink w-40 text-center"
          href={"/"}
        >
          Go back
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
