// 
const form = document.getElementById("studentForm");
        const submitBtn = document.getElementById("submitBtn");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const title = document.getElementById("title").value.trim();
            const body = document.getElementById("body").value.trim();
            const userId = Number(document.getElementById("userId").value);

            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: userId
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to submit form");
                }
                return response.json();
            })
            .then(data => {
                console.log("POST Response:", data);

                alert("Form successfully submitted!");

                form.reset();
                document.getElementById("userId").value = 1;
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Form submission failed. Please try again.");
            });
        });