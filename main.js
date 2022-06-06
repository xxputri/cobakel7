setInterval(function () {
    fetch("https://smart-glass-7.herokuapp.com/api")
      .then((hasil) => hasil.json())
      .then((res) => {
        console.log(res);
        document.getElementById("cahaya").innerHTML = res.ldr;
      });
  }, 1000);