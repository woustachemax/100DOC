export default function Static(){
    return <div className="flex justify-start mx-132 mr-164">
    <div className="m-4">
    <div className="font-extrabold text-3xl">
      Welcome to Static Page
    </div><br />
    <div>
    This paragraph right here is rendered statically using Next.js. By generating the content on the server at build time, Next.js ensures that search engines can easily crawl and index this page, boosting its SEO. Plus, serving static content leads to faster load times and a smoother user experience. And if I need interactivity, Next.js allows me to use the "use client" directive for specific components.   
    <br />

    <br />
    Pretty cool, right? Now navigate to the "Client Page" to check how interactivity is added in Next.js!
    </div>
    

    </div>
 </div>
}