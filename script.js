// function recommendInsulin() {
//     const bloodGlucoseInput = document.getElementById('blood-glucose');
//     const bloodGlucoseLevel = bloodGlucoseInput.value;
    
//     const LowerLevelInput=document.getElementById('lower-limit');
//     const LowerLevel=LowerLevelInput.value;

//     const UpperLevelInput=document.getElementById('upper-limit');
//     const UpperLevel=UpperLevelInput.value;

//     const OptimalLevel=(UpperLevel+LowerLevel)/2;
//     const LevelDiff=bloodGlucoseInput-OptimalLevel;
//     if (bloodGlucoseLevel < LowerLevel) {
//         const decreaseValue= Math.abs(Math.floor(LevelDiff/10));   //using Math.Floor to covert float to int
//         displayRecommendation(`Decrease insulin dosage by ${decreaseValue} units`);
//     } else if (bloodGlucoseLevel > UpperLevel) {
//         const increaseValue= Math.abs(Math.floor(LevelDiff/10));
//         displayRecommendation(`Increase insulin dosage by ${increaseValue} units`);
//     } 
//    else {
//         displayRecommendation("Insulin dosage is adequate.");
//     }
    
// }
function recommendInsulin() {
    const bloodGlucoseInput = document.getElementById('blood-glucose');
    const bloodGlucoseLevel = parseFloat(bloodGlucoseInput.value); // Convert input value to a floating-point number
    
    const LowerLevelInput = document.getElementById('lower-limit');
    const LowerLevel = parseFloat(LowerLevelInput.value); // Convert input value to a floating-point number
    
    const UpperLevelInput = document.getElementById('upper-limit');
    const UpperLevel = parseFloat(UpperLevelInput.value); // Convert input value to a floating-point number

    // Check if any input field is empty
    if (bloodGlucoseInput.value === '' || LowerLevelInput.value === '' || UpperLevelInput.value === '') {
        alert("Please fill in all the input fields.");
        return; // Exit the function early
    }

    // Check if any input value is NaN
    if (isNaN(bloodGlucoseLevel) || isNaN(LowerLevel) || isNaN(UpperLevel)) {
        displayRecommendation("Please enter valid numeric values.");
        return; 
    }

    //check if lower level>upper level
    if(LowerLevel>=UpperLevel){
        alert("The Upper limit value must be greater than the Lower limit value")
        return;
        }
    
    const OptimalLevel = (UpperLevel + LowerLevel) / 2;
    const LevelDiff = bloodGlucoseLevel - OptimalLevel;
   if (bloodGlucoseLevel < LowerLevel) {
        const decreaseValue = Math.abs(Math.floor(LevelDiff / 10)); //using Math.floor to convert float to int
        displayRecommendation(`Decrease insulin dosage by ${decreaseValue} units`);
        
    } else if (bloodGlucoseLevel > UpperLevel) {
        const increaseValue = Math.abs(Math.floor(LevelDiff / 10));
        displayRecommendation(`Increase insulin dosage by ${increaseValue} units`);
        
    } else {
        displayRecommendation("Blood Sugar Level is Optimul");
        
    }
}

function displayRecommendation(recommendation) {
    const recommendationDiv = document.getElementById('recommendation');
    recommendationDiv.innerText = recommendation;
    
}