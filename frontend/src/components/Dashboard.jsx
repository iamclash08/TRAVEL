import Navbar from "./Navbar";

export default function Dashboard(){
  return (
    <>
      <Navbar />

      <div style={styles.page}>

        <div style={styles.searchBox}>
          <input
            className="input-field"
            placeholder="Search Destination..."
          />
          <button className="white-btn">
            Search
          </button>
        </div>

        <div style={styles.section}>
          <h2>AI Chatbot (coming soon)</h2>
        </div>

      </div>
    </>
  )
}

const styles={
  page:{
    padding:"40px"
  },
  searchBox:{
    display:"flex",
    gap:"10px",
    width:"500px"
  },
  section:{
    marginTop:"40px"
  }
}
