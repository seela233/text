document.addEventListener("DOMContentLoaded", function () {
    
    // 1. تشغيل صفحة تسجيل الدخول وحفظ البيانات
    const loginForm = document.getElementById("sheinLoginForm");
    const togglePass = document.getElementById("togglePass");
    const passInput = document.getElementById("inpPass");

    if (togglePass && passInput) {
        togglePass.addEventListener("click", function () {
            const type = passInput.getAttribute("type") === "password" ? "text" : "password";
            passInput.setAttribute("type", type);
            this.classList.toggle("fa-eye");
            this.classList.toggle("fa-eye-slash");
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const userData = {
                name: document.getElementById("inpName").value,
                age: document.getElementById("inpAge").value,
                job: document.getElementById("inpJob").value,
                email: document.getElementById("inpEmail").value
            };

            // حفظ البيانات في متصفح المستخدم
            localStorage.setItem("sheinUserRealData", JSON.stringify(userData));

            // الانتقال الفوري لصفحة الترحيب المطابقة للصورة الثانية
            window.location.href = "welcome.html";
        });
    }

    // 2. تحميل وعرض البيانات في صفحة الترحيب (welcome.html)
    const resName = document.getElementById("resName");
    if (resName) {
        const storedData = localStorage.getItem("sheinUserRealData");

        if (storedData) {
            const user = JSON.parse(storedData);
            document.getElementById("topUserName").textContent = user.name;
            document.getElementById("resName").textContent = user.name;
            document.getElementById("resAge").textContent = user.age + " سنة";
            document.getElementById("resEmail").textContent = user.email;
            document.getElementById("resJob").textContent = user.job;
        } else {
            // إعادة التوجيه لصفحة الدخول إذا لم يتم التسجيل
            window.location.href = "index.html";
        }
    }

    // زر تسجيل الخروج
    const logoutLink = document.getElementById("logoutLink");
    if (logoutLink) {
        logoutLink.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.removeItem("sheinUserRealData");
            window.location.href = "index.html";
        });
    }
});