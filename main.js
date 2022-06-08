setInterval(function () {
    fetch("https://smart-glass-7.herokuapp.com/api")
      .then((hasil) => hasil.json())
      .then((res) => {
        console.log(res);
        document.getElementById("ldr").innerHTML = res.ldr;
        document.getElementById("cahaya").innerHTML = res.cahaya;
        document.getElementById("kaca").innerHTML = res.kaca;
      });
  }, 1000);