import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="text-center">
        <p className="fw-bold fs-4">Welcome to TOP 10 IMDB</p>
        <p>We show top 10 movies of all time!</p>
      </div>
    </MainLayout>
  );
}
