import Layout from '../../components/Layout';

interface UsersProps {
  dataUsers: Array<any>;
}

export default function Users({ dataUsers }: UsersProps) {
  console.log(dataUsers);
  return (
    <Layout pageTitle="Users Page">
      <p>Users Page</p>
      {dataUsers.map((user) => (
        <div key={user.id}>
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
