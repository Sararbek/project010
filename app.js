{
  //1-masala
  {
    function declaration(name) {
      return `Assalomu alaykum ${name}`;
    }
    console.log(declaration("John"));
  }
  {
    const expression = function (name) {
      return `Assalomu alaykum ${name}`;
    };
    console.log(expression("John"));
  }
  {
    const arrow = (name) => {
      return `Assalomu alaykum ${name}`;
    };
    console.log(arrow("John"));
  }
}

{
  //2-masala
  {
    function declaration(a, b) {
      let ab = [];
      for (let i = 0; i <= b - a; i++) {
        ab[i] = a + i;
      }
      return ab;
    }
    console.log(declaration(3, 10));
  }
  {
    const expression = function (a, b) {
      let ab = [];
      for (let i = 0; i <= b - a; i++) {
        ab[i] = a + i;
      }
      return ab;
    };
    console.log(expression(3, 10));
  }
  {
    const arrow = (a, b) => {
      let ab = [];
      for (let i = 0; i <= b - a; i++) {
        ab[i] = a + i;
      }
      return ab;
    };
    console.log(arrow(3, 10));
  }
}

{
  //3-masala
  {
    function declaration(bool) {
      if (bool === true) {
        return 1;
      } else {
        return 0;
      }
    }
    console.log(declaration(false));
  }
  {
    const expression = function (bool) {
      if (bool === true) {
        return 1;
      } else {
        return 0;
      }
    };
    console.log(expression(true));
  }
  {
    const arrow = (bool) => {
      if (bool === true) {
        return 1;
      } else {
        return 0;
      }
    };
    console.log(arrow(true));
  }
}

{
  //4-masala
  {
    function declaration(name) {
      let capitaletter = name.split("");
      return `${name} -> ${capitaletter[0]}`;
    }
    console.log(declaration("Sarvar"));
  }
  {
    const expression = function (name) {
      let capitaletter = name.split("");
      return `${name} -> ${capitaletter[0]}`;
    };
    console.log(expression("Salom"));
  }
  {
    const arrow = (name) => {
      let capitaletter = name.split("");
      return `${name} -> ${capitaletter[0]}`;
    };
    console.log(arrow("Hello"));
  }
}

{
  //5.masala
  {
    function declaration(...rest) {
      let sum = 0;
      for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
      }
      return sum;
    }
    console.log(declaration(5, 3, 7));
  }
  {
    const expression = function (...rest) {
      let sum = 0;
      for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
      }
      return sum;
    };
    console.log(expression(5, 3, 7));
  }
  {
    const arrow = (...rest) => {
      let sum = 0;
      for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
      }
      return sum;
    };
    console.log(arrow(5, 3, 7));
  }
}
