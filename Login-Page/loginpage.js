document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin@gmail.com" && password === "1234") {
        Swal.fire({
            title: "Berhasil Login",
            text: "Lanjutkan perjalanan anda",
            imageUrl: "https://img.freepik.com/free-vector/hand-drawn-grenade-cartoon-illustration_23-2150904083.jpg?t=st=1728960835~exp=1728964435~hmac=b61e0e346d932cdfcb8ad17be06f62de60c6148083fc6083d8b838545c1a6688&w=740",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Custom image"
          
        }).then(() => {
            window.location.href = 'movie2.html';
        });
    } else {
        Swal.fire({
            title: "Error!",
            text: "Username atau password salah!",
            icon: "error"
        });
    }
});
