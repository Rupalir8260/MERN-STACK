async function loadPosts() {
try {
     const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
);
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    const posts = await response.json();
    console.log("Latest Posts:", posts);
    } catch (error) {
     console.error("Error loading posts:", error.message);
}
}

loadPosts();