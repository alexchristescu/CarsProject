


export  class WebCallClass {

  constructor() {
  //  webapiURL = 'http://localhost/CarRent/queries.php'
  }




  async testSql(){
    let a = '';

    try {
      const response = await fetch('http://192.168.1.135/CarRent/queries.php', {
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
      const response = await fetch('http://192.168.1.135/CarRent/queries.php', {
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




  async Cars(){
    let raspuns2 = '';

    try {
      const response = await fetch('http://192.168.1.135/CarRent/queries.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json'},
        timeout: 500000000,
        body: JSON.stringify({

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


















}


const GlobalWebCallClass = new WebCallClass();
export default GlobalWebCallClass;
