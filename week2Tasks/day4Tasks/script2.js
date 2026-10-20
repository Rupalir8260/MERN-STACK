
const btn = document.getElementById("loadBtn");
const userGrid = document.getElementById("userGrid");

btn.addEventListener("click", async () => {
    try {
        btn.disabled = true;
        userGrid.innerHTML = "Loading users...";
        const res = await fetch("https://randomuser.me/api/?results=5");
        if (!res.ok) throw new Error("Failed to fetch users");

        const data = await res.json();
        userGrid.innerHTML = "";

        data.results.forEach(user => {
            userGrid.innerHTML += `
                <div class="user-card">
                    <img src="${user.picture.large}" alt="User Photo">
                    <h3>${user.name.first} ${user.name.last}</h3>
                    <p>${user.email}</p>
                </div>
            `;
        });
    } catch (error) {
        userGrid.textContent = "Error fetching users. Try again.";
    } finally {
        btn.disabled = false;
    }
});
