import Link from "next/link";
// import Image from "next/image";

export default function Contents() {
  return (
    <section className="py-10 grid grid-cols-3 font-serif">
      <div className="col-span-1 flex justify-center">
        <Link href="/">
          <p className="text-lg ml-10 my-5 underline"> + Create New Group</p>
        </Link>
      </div>
      <div className="col-span-1 flex justify-center">
        <Link href="/">
          <p className="text-lg ml-10 my-5 underline"> All Study Groups</p>
        </Link>
      </div>
      <div className="col-span-1 flex justify-center">
        <Link href="/">
          <p className="text-lg ml-10 my-5 underline"> Joined Groups</p>
        </Link>
      </div>
    </section>
  );
}
