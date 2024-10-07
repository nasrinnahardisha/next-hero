// import { getPosts } from "@/Components/getPosts";
import Link from "next/link";
import React from "react";
import { redirect } from 'next/navigation';


const getPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
 const data = await res.json();
//  if (data) {
//   redirect(`/posts/${data[0].id}`)
// }
  return data;
};


const postsPage = async () => {
  const postsData = await getPosts();

  // console.log(postsData);
  return <div className="">
       <h1 className="text-center text-2xl m-6"> All Posts </h1>
      <div className="grid grid-cols-4 gap-6">
        {postsData?.slice(0, 10)?.map(({ title, body, id }) => (
          <div key={id} className="border-2 p-5">
            <h3>Title: {title}</h3>
            <h3>Description: {body}</h3>
            <button className="bg-pink-600 px-4 py-2">
              <Link href={`/posts/${id}`}>See Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  
};

export default postsPage;
