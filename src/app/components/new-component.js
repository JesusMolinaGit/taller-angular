angular.module('app').component('newComponent',{
    templateUrl: 'app/components/newComponent-template.html',
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
        console.log(vm.miVariable);
    }

}