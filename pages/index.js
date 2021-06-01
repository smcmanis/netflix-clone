import Head from 'next/head'
import { signIn, useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-black"
      style={{
        'background-image':
          'linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(hero-bg.jpg)'
      }}>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {!session && <>
          Not signed in <br />
          <button>Sign in</button>
        </>}
        {session && <>
          Signed in as {session.user.email} <br />
          <button >Sign out</button>
        </>}
        <h1 className="text-5xl font-bold text-white max-w-md">Unlimited movies, TV shows and more.</h1>
        <h2 className="text-2xl text-white mt-4 mb-8">Watch anywhere. Cancel at any time.</h2>
        <p className="text-lg text-white">
          Ready to watch Netflix? Enter your email to create or restart your membership.
        </p>

        <div className="flex mt-4">
          <input placeholder="Email address" className="bg-white text-sm p-4 min-w-[400px]" >
          </input>
          <button onClick={() => signIn()} className="flex items-center bg-[#e50914] text-white text-2xl px-8">
            Get Started
            <svg
              className="w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>

    </div>
  )
}
