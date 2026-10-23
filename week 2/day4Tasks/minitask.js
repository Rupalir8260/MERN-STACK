
const refreshBtn = document.getElementById("refreshBtn");
const userGrid = document.getElementById("user-grid");
const statusText = document.getElementById("status");

async function loadUsers() {
    refreshBtn.disabled = true;
    refreshBtn.textContent = "Loading...";
    statusText.textContent = "Fetching user details...";

    try {
        const response = await fetch(
            "https://randomuser.me/api/?results=6"
     );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
    }
       const data = await response.json();
        userGrid.innerHTML = "";
        data.results.forEach((user) => {
        const card = document.createElement("article");
        card.className = "user-card";

        const image = document.createElement("img");
        image.src = user.picture.large;
        image.alt = `Photo of ${user.name.first} ${user.name.last}`;
        image.loading = "lazy";

        const name = document.createElement("h2");
        name.textContent =
        `${user.name.first} ${user.name.last}`;

        const email = document.createElement("p");
        email.textContent = user.email;

        card.append(image, name, email);
        userGrid.appendChild(card);
    });
      statusText.textContent =
            `Successfully loaded ${data.results.length} users.`;

    } catch (error) {
        statusText.textContent =
            "Unable to load users. Please try again.";

        console.error("Error:", error);
    } finally {
        refreshBtn.disabled = false;
        refreshBtn.textContent = "Refresh Users";
    }
}
refreshBtn.addEventListener("click", loadUsers);
loadUsers();
