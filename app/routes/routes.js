module.exports = function(application){

    application.get('/',function(req,res){
        application.app.controllers.DestinationPointsController.indexPoi(req,res)
    });	

    // form send post
    application.post('/sendPoi',function(req,res){
        application.app.controllers.DestinationPointsController.sendPoi(req,res)
    });	


	application.post('/destinationPoint',function(req,res){
        application.app.controllers.DestinationPointsController.addPOI(req,res)
    });	

    application.post('/getPoints',function(req,res){
        application.app.controllers.DestinationPointsController.getPOI(req,res)
    });	
    application.post('/proximidade',function(req,res){
        application.app.controllers.DestinationPointsController.POIsPorProximidade(req,res)
    });	
}
