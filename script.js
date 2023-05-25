<script>
  // 获取当前日期
  var currentDate = new Date();

  // 获取日期的字符串表示（例如：May 25, 2023）
  var dateString = currentDate.toLocaleDateString("en-US", { 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  });

  // 将日期显示在页面上的某个元素中
  document.getElementById("currentDate").textContent = dateString;

  // 获取导航菜单元素
  var navMenu = document.getElementById("navMenu");

  // 获取导航菜单切换按钮
  var navToggle = document.getElementById("navToggle");

  // 切换导航菜单的显示/隐藏
  navToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
  });
</script>
