
import Link from 'next/link';


export default function Index() {
  return (
    <div>
      <h1>Welcome to My Next.js API</h1>
      <Link href="/demo">
      <a>Demo Page</a>
    </Link>
      
    </div>
  );
}
