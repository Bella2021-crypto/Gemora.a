import Layout from "../components/Layout";

export default function Login() {
  return (
    <Layout>
      <h2>Login</h2>
      <form style={{ maxWidth: "400px", margin: "20px auto" }}>
        <label>Email:</label>
        <input type="email" style={{ width: "100%", padding: "10px", margin: "10px 0" }} />

        <label>Password:</label>
        <input type="password" style={{ width: "100%", padding: "10px", margin: "10px 0" }} />

        <button style={{ background: "#a67c52", color: "white", padding: "10px 15px", border: "none" }}>
          Login
        </button>
      </form>
    </Layout>
  );
}
