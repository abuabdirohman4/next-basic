// import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

interface User {
  // id: number
  name: string
  email: string
  phone: string
  website: string
}
// interface UserDetailProps{
//   // user:object
//   user:User
// }
export default function UserDetail({
  name, email, website, phone,
}: User) {
  // const router = useRouter();
  // const { id } = router.query;
  // const { user } = props;

  return (
    <Layout pageTitle="Users Detail">
      <h1>User Detail Page</h1>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  // interface Id {
  //   id: number
  // }
  const paths = dataUsers.map((user:{id: number}) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

interface GetStaticProps {
  params: {
    id: string
  }
}
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
