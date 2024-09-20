let person={
    firstname:"Vivekananda",
    lastname:"Guru",
    fullname:function(){
        return this.firstname+" "+this.lastname;
    }
    
};
console.log(person.fullname());