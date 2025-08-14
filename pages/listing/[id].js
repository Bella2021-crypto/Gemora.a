import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function ListingPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h2>Product #{id}</h2>
      <p>Details for the selected luxury item will go here.</p>
    </Layout>
  );
}

