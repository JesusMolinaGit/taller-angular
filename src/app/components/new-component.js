angular.module('app').component('newComponent',{
    templateUrl: 'app/components/newComponentTemplate.html',
    controller: newComponent,
    controllerAs:'newComponent',
    bindings:{
        foo: '@'
    }
});

function newComponent(){

    var vm=this;

    vm.$onInit = function(){
        vm.miVariable = vm.foo;
    }

}