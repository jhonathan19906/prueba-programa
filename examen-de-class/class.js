class Aves{
    flyBehavior;
    comerBehavior;
    perFormFly(){
        this.flyBehavior.fly();
    }
    setPerFormFly(perFormFly){
        this.perFormFly = perFormFly;
    }
    setComerBehavior(comerBehavior){
        this.comerBehavior = comerBehavior;
    }
    display(){
        console.log('nombre es ave');
    };
}
class Aguila extends Aves{
   
    display(){
        console.log('Aguila grande');
    };
}
class Colibri extends Aves{
   
    display(){
        console.log('colibri lindo');
    };
}
class AveVuela {
    fly(){
        console.log('esta volando alto');
    };
}
class AveVuelaPeq{
    fly(){
        console.log('esta volando  en los arbustos');
    };
}
class ComerAves{
    comer(){
        console.log('come aves');
    };
}
class ComerMiel{
    comer(){
        console.log('come miel');
    };
}