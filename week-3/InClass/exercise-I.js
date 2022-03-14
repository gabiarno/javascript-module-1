const messy = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];

  function formatMe(myName) {
    console.log(myName.toUpperCase()+'!'); 
     return myName.toUpperCase()+'!';
      
  }

  function deleteNumber(name) {
      return typeof name === 'string';
  }

  function orderMe(array) {
      return array.filter(deleteNumber).map(formatMe);
  }

  console.log(orderMe(messy));