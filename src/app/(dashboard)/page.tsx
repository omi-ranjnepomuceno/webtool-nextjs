import { getUserDetails } from "../(auth)/_lib/actions";

export default async function Homepage() {
  await getUserDetails();
  return <div>Home page</div>;
}
