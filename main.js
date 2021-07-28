//types of vehicles
//plane
//boat
//train
//bus

/*const jobTypes = {
    pilot: 'plane',
    captain: 'boat',
    engineer: 'train',
    driver: 'bus'
}*/


class Vehicle {

    //properties:
    //name - unique identifier for the vehicle
    //type - type of the vehicle
    //assignedCrew - an array of crew members assigned to the vehicle

    constructor(id, type/*, assignedCrew?*/){
        this.id = id;
        this.type = type;
        this.assignedCrew = [];
    }


    //canGo() -- return true if the vehicle is allowed to be operated, ->
    //based on the type of the vehicle and the current list of assigned crew
    canGo(){

        let currentCrew = this.assignedCrew;

        if(this.type == 'plane' && currentCrew.includes('pilot') || 
           this.type == 'boat' && currentCrew.includes('captain') ||
           this.type == 'train' && currentCrew.includes('engineer') ||
           this.type == 'bus' && currentCrew.includes('driver')){
            console.log('Ready to leave!')
            return true; 
        }
        else{
            console.log("sorry, this vehicle does not have a full crew");
            return "sorry, this vehicle does not have a full crew"
            
        }
    }
}

//job titles
//pilot
//captain
//engineer
//driver

class CrewMember {

    //properties:
    //name - name of the crew member
    //title - title of the crew member
    //assignedVehicle - the vehicle this crew member is assigned to (entire Vehicle object)

    constructor(name, title/*,assignedVehicle?*/){
        this.name = name;
        this.title = title;
        this.assignedVehicle = null
    }
3

    //assignTo(vehicle) - assign this crew member to the vehicle passed in and update the vehicles list of assigned crew
    assignTo(vehicle){
        //something is wrong with this method.  getting 'circular' error in the assignedCrew and assignedVehicle arrays
        
        /*this.assignedVehicle = vehicle;
        vehicle.assignedCrew.push(this);*/

        //crew members assigned vehicle is the one passed in
        this.assignedVehicle = vehicle;
        //add new crew member to assignedCrew array for that vehicle
        this.assignedVehicle.assignedCrew.push(this);
    }
}

let john = new CrewMember ("John Doe", "Pilot");
let mark = new CrewMember ("Mark Due", "Engineer");
let bob = new CrewMember ("Bob Die", "Captain");

let v1 = new Vehicle('12341', 'Plane');
let v2 = new Vehicle('1232', 'Bus');
let v3 = new Vehicle('Betty', 'Boat');

john.assignTo(v1);
mark.assignTo(v2);
bob.assignTo(v2);


v1.canGo() //true
v2.canGo() //false
v3.canGo() //false

console.log(v2.assignedCrew) //2

console.log(v1)
console.log(v2)
console.log(v3);
//john.assignedVehicle.id // 12341





//if this is too easy and after you are done with the above
//what happens if you assign a crew member to 2 vehicles? should they get unassigned from the first
