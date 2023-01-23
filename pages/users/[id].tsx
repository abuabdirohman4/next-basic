// import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
}
interface UserDetailProps{
  // user:object
  user:User
}
export default function UserDetail(props:UserDetailProps) {
// export default function UserDetail(props:User) {
  // const router = useRouter();
  // const { id } = router.query;
  const { user } = props;
  // const {
  //   name, email, phone, website,
  // } = props;

  return (
    <Layout pageTitle="Users Detail">
      <h1>User Detail Page</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  // interface Id {
  //   id: number
  // }
  const paths = dataUsers.map((user:User) => ({
  // const paths = dataUsers.map((user: {id: number}) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string
  }
}
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  // console.log('id', id);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  // const {
  //   name, email, phone, website,
  // } = await res.json();
  const user = await res.json();
  return {
    props: {
      // name, email, phone, website,
      user,
    },
  };
}
