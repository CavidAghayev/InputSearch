let data = [
    {
      id: "1",
      name: "Aygül",
      surname: "Abbaszadə",
      age: "28",
    },
    {
      id: "2",
      name: "Anar",
      surname: "İsmayılov",
      age: "28",
    },
    {
      id: "3",
      name: "Kənan",
      surname: "Həsənzadə",
      age: "24",
    },
    {
      id: "4",
      name: "Mehran Kəbirtəlai",
      surname: "Abbaszadə",
      age: "26",
    },
    {
      id: "5",
      name: "Bənövşə",
      surname: "Məhərrəmova",
      age: "20",
    },
    {
      id: "6",
      name: "Zalı",
      surname: "Nəcəfov",
      age: "30",
    },
  ];
  let tBody = document.querySelector("#tBody");
  for (let i = 0; i < data.length; i++) {
    tBody.innerHTML += `
  <tr>
              <td>${data[i].name}</td>
              <td>${data[i].surname}szade</td>
              <td>${data[i].age}</td>
              <td>${data[i].id}</td>
          </tr>
  `;
  }
  // data.map((t) =>{
  //     let a = Object.values(t)
  // console.log(a)
  //     a.filter((a) => {
  //         console.log(a);
  //     })
  // })
  let input = document.querySelector("#input");
  input.addEventListener("keyup", function (e) {
    var arr = [];
    console.log(e.target.value);
    data.map((t, index) => {
      if (Object.values(t).indexOf(e.target.value) >= 0) {
        arr.push(t);
      }
    });
    tBody.innerHTML = "";
    if (e.target.value === "") {
      for (let i = 0; i < data.length; i++) {
        tBody.innerHTML += `
      <tr>
                  <td>${data[i].name}</td>
                  <td>${data[i].surname}szade</td>
                  <td>${data[i].age}</td>
                  <td>${data[i].id}</td>
              </tr>
      `;
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        tBody.innerHTML += `
        <tr>
                    <td>${arr[i].name}</td>
                    <td>${arr[i].surname}szade</td>
                    <td>${arr[i].age}</td>
                    <td>${arr[i].id}</td>
                </tr>
        `;
      }
    }
  });