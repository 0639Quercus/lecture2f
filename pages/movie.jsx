import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { IconStar } from "@tabler/icons";
import { movieDB } from "../libs/movieDB";
import Link from "next/link";

export default function movie() {
  const [filterText, setFilterText] = useState("");

  const filtered = movieDB.filter((x) =>
    x.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="mx-auto" style={{ maxWidth: "600px" }}>
        <p className="fw-bold fs-4 text-center">Top 10 Movies</p>
        <input
          className="form-control mb-2"
          placeholder="Filter title..."
          onChange={(e) => setFilterText(e.target.value)}
          value={filterText}
        />
        {filtered.map((x, i) => (
          <div className="d-flex justify-content-between gap-3" key={x.id}>
            <Link href={`/movie/${x.id}`}>
              <a>
                {i + 1}. {x.title}
              </a>
            </Link>
            <span className="text-primary fw-bold">
              <IconStar />
              {" " + x.rating}
            </span>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
