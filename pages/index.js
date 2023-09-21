
import Link from 'next/link';

//Can't get the data to show on the page. It does add the data if you look at the log but it won't update the table

export default function Index() {
  return (
    <div>
      <h1>Welcome to My Next.js API</h1>
      <Link href="/demo">Go to demo page</Link>
      
    </div>
  );
}
