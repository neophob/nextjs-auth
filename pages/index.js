import { signIn, signOut, useSession } from 'next-auth/client';

export default function Page() {
  const [ session, loading ] = useSession();
  /* eslint-disable */
  console.log('pages', {session, loading});
  /* eslint-enable */
  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  </>;
}
