angular.module('app').component('marmota',{
    template:'<p>soy una marmota que se llama {{marmota.nombreMarmota}}</p>',
    controller: controladordemarmota,
    controllerAs: 'marmota',
    bindings: {
        nombreMarmota: '@'
    }
});

function controladordemarmota(){

}