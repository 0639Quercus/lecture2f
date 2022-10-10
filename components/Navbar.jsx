import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div style={{ maxWidth: "600px" }} className="mx-auto">
      <div className="d-flex justify-content-center gap-5 fs-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/movie">
          <a>Movie</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/todolist">
          <a>Todolist</a>
        </Link>
      </div>
      <hr />
    </div>
  );
}
