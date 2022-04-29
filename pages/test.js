import axios from "axios";
import { useSession } from "next-auth/react";
const Test = ({ a }) => {
  const { data: session, status } = useSession();
  console.log(a);
  console.log(status);
  return <>{a}</>;
};

const getStaticProps = async () => {
  let data = "a";
  // const res = await axios
  //   .get("http://localhost:3000/api/admin/getUsers")
  //   .then((res) => {
  //     data = res.data.accounts;
  //   });
  return {
    props: {
      a: data,
    },
  };
};
export { getStaticProps };

export default Test;
