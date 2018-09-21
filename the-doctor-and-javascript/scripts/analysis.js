// console.group("Doctor Who Actors output using `for...of`");
//     for(let actor of actors)console.table(actor);
// console.groupEnd();
//
// console.group("Doctor Who Actors output using `Array.map()`");
//     actors.map(actor => console.table(actor));
// console.groupEnd();
//
// console.group("Doctor Who Actors output showing full names as a single string.");
//     actors.map(actor => console.log(actor.first_name + " " + actor.last_name));
// console.groupEnd();
//
// console.group("Doctor Who Actors output filtered to only show classic era [before 2005]");
//     const classicEra = actors.filter(doctor => (doctor.tenure_start < 2005));
//     console.table(classicEra);
// console.groupEnd();
//
// console.group("Doctor Who Actors output filtered to only show modern era [2005 to present]");
//     const modernEra = actors.filter(doctor => (doctor.tenure_start > 2005));
//     console.table(modernEra);
// console.groupEnd();
//
// console.group("Doctor Who Actors output sorted by length of tenure");
//     const actorsByTenure = actors.sort((a,b) => {
//             return ((b.tenure_end-b.tenure_start) - (a.tenure_end - a.tenure_start));
//         }).map((a) => {
//             let zeroYearFix = (a.tenure_end === null) ? a.tenure_end = 0 : a.tenure_end - a.tenure_start;
//             console.log(`${a.first_name} ${a.last_name} has been in the role for ${zeroYearFix} year(s)`);
//     });
// console.groupEnd();
//
// console.group("Sort the Doctor Who actors based on when they first appeared in the role");
//     const actorsFirstAppearance = actors.sort((a,b) => {
//         return a.tenure_start - b.tenure_start;
//     })
//     console.table(actorsFirstAppearance);
// console.groupEnd();
//
// console.group("Sort the Doctor Who actors based on their last names");
//     const sortedByLastName = actors.sort(function(a,b){
//
//         if(a.last_name.toString() === b.last_name.toString()) {
//             return (a.first_name > b.first_name ? 1 : -1);
//         }
//         else {
//             return (a.last_name > b.last_name ?  1 :  -1);
//         }
//     });
//     console.table(sortedByLastName)
// console.groupEnd();
//
// console.group("Display the top rated episodes using the map() method");
//      let topRatedList = topRated.map(a => a.title);
//      console.table(topRatedList);
// console.groupEnd();

// REDUCE EXAMPLE
// const numbers = [13,126,15,42,1026,255];
//
// const sumNumbers = numbers.reduce((total, num) => total+num);
// console.log(sumNumbers);

// console.group("Using .reduce() display how many years an actor has been playing the Doctor");
//     const totalYears = actors.reduce(
//         (total, doctor) => {
//             let difference = 1;
//             if(doctor.tenure_end !== null && doctor.tenure_end!==doctor.tenure_start) {
//                difference = (doctor.tenure_end-doctor.tenure_start);
//             }
//             return total + difference;
//     }, 0);
//
//     console.log(`${totalYears} total years`);
// console.groupEnd();

console.group("Reduce the Top Rated Episodes array to a listing of how many times each doctor appeared in one of the episodes");
    let nameCount = topRated.reduce((doctorNames, episode) => {

        let foundDoctor = doctorNames.find((doctorName) => doctorName.actor === episode.actor); // Returns true if the doctor is found in the new array

        let splitArray = episode.actor.split(', ');



            if(!foundDoctor) {

                doctorNames.push({
                    actor: episode.actor,
                    count: 0,
                });

                foundDoctor = doctorNames.find(
                    (doctorName) => doctorName.actor === episode.actor
                );
            }

            const foundDoctorIndex = doctorNames.indexOf(foundDoctor);
            // console.log(doctorNames[foundDoctorIndex]);
            doctorNames[foundDoctorIndex].count++;

            return doctorNames;



    }, []).sort((a,b) => b.count - a.count);

    console.table(nameCount);
console.groupEnd();