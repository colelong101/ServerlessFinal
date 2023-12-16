const authApiUrl = "myexampleapiurl.aws";
const viewCountApiUrl = "myexampleviewcountapiurl.aws";

async function authenticate() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(authApiUrl, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    alert(data.message);
  } catch (error) {
    console.error("Authentication failed:", error);
    alert("Authentication failed. Please try again.");
  }
}

async function trackAndViewCount() {
  const listingId = document.getElementById("listingId").value;

  try {
    const response = await fetch(viewCountApiUrl, {
      method: "POST",
      body: JSON.stringify({ listingId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    document.getElementById(
      "viewCountResult"
    ).innerText = `View Count: ${data.viewCount}`;
  } catch (error) {
    console.error("Error tracking/viewing count:", error);
    document.getElementById("viewCountResult").innerText =
      "Error tracking/viewing count. Please try again.";
  }
}
