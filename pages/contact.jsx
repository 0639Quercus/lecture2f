import React from "react";
import { IconBrandFacebook, IconBrandTwitter } from "@tabler/icons";
import MainLayout from "../layouts/MainLayout";

export default function contact() {
  return (
    <MainLayout>
      <div className="text-center">
        <p className="fw-bold fs-4">Contact</p>
        <p>
          <strong>
            <IconBrandFacebook />
            Facebook :{" "}
          </strong>
          IMDB2
        </p>
        <p>
          <strong>
            <IconBrandTwitter />
            Twitter :{" "}
          </strong>
          IMBD2
        </p>
      </div>
    </MainLayout>
  );
}
