import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Users.module.css';

interface UsersProps {
  dataUsers: Array<any>;
}

export default function Users({ dataUsers }: UsersProps) {
  const router = useRouter();

  return (
    <Layout pageTitle="Users Page">
      <p>Users Page</p>
      {dataUsers.map((user) => (
        <div key={user.id} className={styles.card} onClick={() => router.push(`/users/${user.id}`)} onKeyDown={() => null} role="button" tabIndex={0}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
