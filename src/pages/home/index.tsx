export default function Home() {
  return (
    <div className="container">
      <div className="d-flex flex-column">
        <h1>Latest Entries</h1>
        <div className="border shadow-sm p-2 mb-4">
          <h2>Movies</h2>
        </div>
        <div className="border shadow-sm p-2 mb-4">
          <h2>TV Shows</h2>
        </div>
        <div className="border shadow-sm p-2 mb-4">
          <h2>Books</h2>
        </div>
        <div className="border shadow-sm p-2 mb-4">
          <h2>More</h2>
        </div>
      </div>
    </div>
  )
}
