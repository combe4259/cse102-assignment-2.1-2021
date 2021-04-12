import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>My name is Kim Junhyung</h1>
      <h2>University student number : 2021024348</h2>
      <h3>The information of system</h3>
      <h4>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h4>
    </>
  )
}