# APIs & Backends in Next.js
## Getting Started

- NextJs eliminates the need to have useState, while fetching data from the backend as we can directly call the main functions `The app/home` functions as async, so we don't have to use set(whatever) to change the value and then use the state variable as data, instead we can directly use data as data.
- To see a loading component we can add a file loading.tsx, and the data in the functon will be shown while the page will be loading.

---
## Backends in Next.js
- Introduce a new folder called api, backend can only be created in api folder **Inside App Folder**
- For the backend routes name the routes according to the type of request for example:

```
export function GET(){

    return Response.json({

        email: "sid@test.com",
        name: "Woustachemax"
    })
}
```
which can be changed to POST if the the type of request is POST and so on.

