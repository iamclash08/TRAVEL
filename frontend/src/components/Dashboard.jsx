import Navbar from "./Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div style={styles.container}>

        {/* LEFT SIDE – CHATBOT */}
        <div style={styles.leftSide}>
          <h2>Travel AI Chatbot</h2>
          <div style={styles.chatArea}>
            <p style={{color:"#aaa"}}>Chatbot coming soon...</p>
          </div>
        </div>

        {/* RIGHT SIDE – SEARCH */}
        <div style={styles.rightSide}>
          <h2>Destination Search</h2>
          <div style={styles.searchBox}>
            <input
              className="input-field"
              placeholder="Search Destination..."
            />
            <button className="white-btn">
              Search
            </button>
          </div>
        </div>

      </div>
    </>
  );
}

const styles = {

  container:{
    display:"flex",
    justifyContent:"space-between",
    padding:"40px 80px",
    gap:"40px",
  },

  leftSide:{
    flex:"1",
  },

  rightSide:{
    flex:"1",
  },

  chatArea:{
    background:"#111",
    padding:"20px",
    borderRadius:"8px",
    height:"400px",
    overflowY:"auto",
    border:"1px solid #222",
  },

  searchBox:{
    display:"flex",
    gap:"10px",
    marginTop:"20px",
  },

};
