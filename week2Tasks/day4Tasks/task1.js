const btn = document.getElementById('loadBtn');
const userCard = document.getElementById('userCard');
btn.addEventListener('click', async () => {
try {
const res = await fetch("https://randomuser.me/api/");
const data = await res.json();
const user = data.results[0];

userCard.innerHTML = `
<img src="${user.picture.large}" alt="User Photo">
<h3>${user.name.first} ${user.name.last}</h3>
<p>${user.email}</p>
`;
} catch (error) {
userCard.innerHTML = `<p style="color:red;">Error fetching data </p>`;
}
});
