import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let golfCoach = new GolfCoach();
let cricketCoach = new CricketCoach();

let coaches: Coach[] = [golfCoach, cricketCoach];

for(let coach of coaches){
    console.log(coach.getDailyWorkout());
}