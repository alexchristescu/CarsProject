


export  class WebCallClass {

  constructor() {
  //  webapiURL = 'http://localhost/CarRent/queries.php'
  }




  async testSql(){
    let a = '';

    try {
      const response = await fetch('http://192.168.2.229/CarRent/queries.php', {
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
      const response = await fetch('http://192.168.2.229/CarRent/queries.php', {
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




  async Cars(idcateg, pricecar){
    let raspuns2 = '';
     console.debug(['on call'],idcateg )
    try {
      const response = await fetch('http://192.168.2.229/CarRent/queries.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json'},
        timeout: 500000000,
        body: JSON.stringify({
          pricecar: pricecar,
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
      const response = await fetch('http://192.168.2.229/CarRent/queries.php', {
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
      const response = await fetch('http://192.168.2.229/CarRent/queries.php', {
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



  async CarScreen(idcar){


    console.debug(['carid'],idcar)
    let raspuns4 = '';

    try {
      const response = await fetch('http://192.168.2.229/CarRent/queries.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json'},
        timeout: 500000000,
        body: JSON.stringify({
          idcar: idcar,
          req: 'carscreen'
        })
      });
      const responseToJson = await response.json();



      raspuns4 = responseToJson;
     // alert(raspuns4)

    }
    catch (error) {
   alert(error)
      // ResultData.status = 0;
      // ResultData.mes = error;

      console.debug(['eroare logare'], error)
      raspuns4 = 0;
    }


    return raspuns4;




  }



  async Register(username,password,email){


    
    let raspuns5 = '';

    try {
      const response = await fetch('http://192.168.2.229/CarRent/queries.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json'},
        timeout: 500000000,
        body: JSON.stringify({
          username: username,
          password:password,
          email:email,
          req: 'register'
        })
      });
      const responseToJson = await response.json();



      raspuns5 = responseToJson;
     // alert(raspuns4)

    }
    catch (error) {
 
      // ResultData.status = 0;
      // ResultData.mes = error;

      console.debug(['eroare logare'], error)
      raspuns5 = 0;
    }


    return raspuns5;




  }
















}


const GlobalWebCallClass = new WebCallClass();
export default GlobalWebCallClass;
