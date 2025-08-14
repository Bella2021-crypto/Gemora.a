import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function Listing() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h2>Product #{id}</h2>
      <p>Details about this luxurious item will go here.</p>
    </Layout>
  );
}


