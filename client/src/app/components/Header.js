import Link from "next/link";

export const Header = () => {
  return (
    <div className="header">
      <Link href={"/"}>
        <button className="back-btn">Back</button>
      </Link>
    </div>
  );
};
