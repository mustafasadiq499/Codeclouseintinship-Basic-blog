const blogPosts = [
  {
    title: "How I Got My First Internship",
    content: "It all started when I applied online. Here's how I got selected...",
    
  },
  {
    title: "5 Tips to Improve Coding Skills",
    content: "1. Practice daily. 2. Read documentation. 3. Solve problems on LeetCode...",
  },
  {
    title: "Why HTML & CSS Matter",
    content: "Even if you're a backend dev, knowing HTML/CSS makes you better at building products...",
  }
];

const blogList = document.getElementById("blogList");

blogPosts.forEach(post => {
  const div = document.createElement("div");
  div.className = "blog-post";
  div.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content.slice(0, 100)}...</p>
  `;
  div.onclick = () => alert(post.content); // Simple preview popup
  blogList.appendChild(div);
});