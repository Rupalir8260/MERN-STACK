function fakeAPICall() {
    console.log("Fetching user details...");

    setTimeout(() => {
        console.log("User data received");

        setTimeout(() => {
        console.log("Processing Data...");
  }, 1000);

 }, 2000);
}

fakeAPICall();