class GenericHelper {


    static distanceCalculate(xA , yA , xB , yB){
        let  distancia = 0;
        let a = Math.pow(xA - xB, 2);
        let b = Math.pow(yA - yB, 2);
        distancia = Math.sqrt(a+b);
        return distancia;
    }
  
}
  
  module.exports = GenericHelper;
  