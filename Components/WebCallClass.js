


export  class WebCallClass {

  constructor() {
  //  webapiURL = 'http://localhost/CarRent/queries.php'
  }




  async testSql(){
    let a = '';

    try {
      const response = await fetch('http://192.168.2.224/CarRent/queries.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json'},
        timeout: 500000000,
        body: JSON.stringify({

          req: 'test'
        })
      });
      const responseToJson = await response.json();
     // Mes = JSON.parse(responseToJson);


        a = responseToJson;
    //  alert(a)
    }
    catch (error) {

      // ResultData.status = 0;
      // ResultData.mes = error;

      console.debug(['eroare clienti'], error)
     alert(error)
    }


    return a


  }


  async login(username,pass){
    let raspuns = '';

    try {
      const response = await fetch('http://192.168.2.224/CarRent/queries.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json'},
        timeout: 500000000,
        body: JSON.stringify({
          username: username,
          pass: pass,
          req: 'login'
        })
      });
      const responseToJson = await response.json();



      raspuns = responseToJson;

    }
    catch (error) {

      // ResultData.status = 0;
      // ResultData.mes = error;

      console.debug(['eroare logare'], error)
      raspuns = 0;
    }


    return raspuns;




  }




  async Cars(idcateg){
    let raspuns2 = '';
     console.debug(['on call'],idcateg )
    try {
      const response = await fetch('http://192.168.2.224/CarRent/queries.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json'},
        timeout: 500000000,
        body: JSON.stringify({
          idcateg: idcateg,
          req: 'cars'
        })
      });
      const responseToJson = await response.json();



      raspuns2 = responseToJson;

    }
    catch (error) {
   alert(error)
      // ResultData.status = 0;
      // ResultData.mes = error;

      console.debug(['eroare logare'], error)
      raspuns2 = 0;
    }


    return raspuns2;




  }

  async Categories(){
    let raspuns2 = '';

    try {
      const response = await fetch('http://192.168.2.224/CarRent/queries.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json'},
        timeout: 500000000,
        body: JSON.stringify({

          req: 'categories'
        })
      });
      const responseToJson = await response.json();



      raspuns2 = responseToJson;

    }
    catch (error) {
   alert(error)
      // ResultData.status = 0;
      // ResultData.mes = error;

      console.debug(['eroare logare'], error)
      raspuns2 = 0;
    }


    return raspuns2;




  }


  async Filter(){
    let raspuns3 = '';

    try {
      const response = await fetch('http://192.168.2.224/CarRent/queries.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json'},
        timeout: 500000000,
        body: JSON.stringify({

          req: 'filter'
        })
      });
      const responseToJson = await response.json();



      raspuns3 = responseToJson;

    }
    catch (error) {
   alert(error)
      // ResultData.status = 0;
      // ResultData.mes = error;

      console.debug(['eroare logare'], error)
      raspuns3 = 0;
    }


    return raspuns3;




  }


















}


const GlobalWebCallClass = new WebCallClass();
export default GlobalWebCallClass;
