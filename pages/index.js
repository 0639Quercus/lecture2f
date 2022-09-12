export default function Home() {
  return (
    <div>
      {/* header */}
      <div>
        <p className="display-3 text-center fw-bold text-primary">
          TOP 10 IMDB 🎥
        </p>
      </div>
      {/* navbar */}
      <div style={{ maxWidth: "600px" }} className="mx-auto">
        <div className="d-flex justify-content-center gap-5 fs-4">
          <a>Home</a>
          <a>Movie</a>
          <a>Contact</a>
        </div>
        <hr />
      </div>
      {/* footer */}
      <div style={{ maxWidth: "600px" }} className="mx-auto">
        <hr />
        <div className="text-muted text-center">Copyright © Chayanin 2022</div>
      </div>
    </div>
  );
}
