import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { IconStar } from "@tabler/icons";
import { movieDB } from "../../libs/movieDB";

export default function MovieId() {
  const router = useRouter();

  if (!router.isReady) return <div>Loading ...</div>;
  const id = Number(router.query.id);
  const selMovie = movieDB.find((x) => x.id === id);
  if (!selMovie) return <div>no id</div>;

  return (
    <MainLayout>
      <div className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="d-flex justify-content-between gap-3">
          <img src={selMovie.imgSrc} width="200" />
          <div>
            <p className="fw-vold fs-4">{selMovie.title}</p>
            <p>{selMovie.detail}</p>
            <span className="fw-bold fs-4 text-primary d-flex gap-1">
              <IconStar size={35} />
              {selMovie.rating}
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
