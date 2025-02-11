```javascript
// pages/dynamic/[id]/page.js

import { Suspense } from 'react';

export default async function DynamicRoute({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
  const data = await res.json();

  if (!data) {
    return <p>Data not found</p>;
  }

  return (
    <div>
      <h1>Todo: {data.title}</h1>
      <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}
```