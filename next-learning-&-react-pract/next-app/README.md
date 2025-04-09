
## Getting Started

- The folder structure for routing is /app/folder name/page  (you can go as deep as youd likee).
-  Layout.tsx has a layout for everything, if for a folder, say signin needs to have a banner, you need to crearte layout.ts for that folder.
- Suppose i want a banner for both, login & signup i can just create an auth folder w login and signup and layout.ts will be in auth and both login and signup will be the children for this
- if i enforce the path has to be localhost:3000/login (or) signup I can add `()` around `auth` or any parent folder, name.
- Alas, we still have components (React Nation we're ALIVE!!!!!!!!) the logic is pretty much the same.
- In NextJS the components are either client component or a server, everything is a server component by default so for onClick handlers or other things (useState, useEffect)we need to definer it as client components using `"use client"`
