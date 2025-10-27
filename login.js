// نجيب الفورم
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

// نمنعو الفورم من التحديث التلقائي للصفحة
form.addEventListener("submit", function(e) {
    e.preventDefault();

    // نجيب القيم
    const username = document.getElementById("username").value;
    const password = document.getElementById("lastname").value;

    // نتحقق من المدخلات
    if (username === "" || lastname === "") {
        message.textContent = "المرجو إدخال جميع الحقول!";
        message.style.color = "red";
    } else if (username === "admin" && lastname === "hello") {
        message.textContent = "تسجيل الدخول ناجح ✅";
        message.style.color = "green";
    } else {
        message.textContent = "اسم المستخدم أو كلمة  صحيحة ❌";
        message.style.color = "red";
    }
});