import React from 'react';


 const getDetailsPosts = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    if (!data) {
        redirect(`/posts/${id}`)
    }
    console.log(data);
    return data;
  };

const postDetailsPage =async ({params}) => {
    const {title,body} =await getDetailsPosts(params.id)
    return (

        <div>
            <h3>Title: {title}</h3>
            <h3>Description: {body}</h3>
        </div>
    );
};

export default postDetailsPage;