import { useEffect, useState } from "react";

import axios from "axios";

export default function Home() {

const [posts, setPosts] = useState([]);

const [caption, setCaption] =
useState("");

useEffect(() => {

fetchPosts();

}, []);

const fetchPosts = async () => {

const res = await axios.get(
"http://localhost:5000/api/posts"
);

setPosts(res.data);

};

const createPost = async () => {

await axios.post(
"http://localhost:5000/api/posts",
{
caption,
mediaUrl:
"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
mediaType: "image",
},
{
headers: {
token:
localStorage.getItem("token"),
},
}
);

fetchPosts();

};

return (

<div>

<h1>Feed</h1>

<input
placeholder="Caption"
onChange={(e) =>
setCaption(e.target.value)
}
/>

<button onClick={createPost}>
Post
</button>

{
posts.map((post) => (

<div key={post._id}>

<img
src={post.mediaUrl}
width="300"
alt=""
/>

<p>{post.caption}</p>

<p>
Likes: {post.likes.length}
</p>

</div>

))
}

</div>

);

}
