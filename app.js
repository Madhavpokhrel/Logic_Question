// This function "evaluateSubmit", runs on form submit and it checks the number validity and alerts the user if the number is not valid numbers.
// The valid numbers are n.0, n., n, and n.n.
const evaluateSubmit = () => {

    // Getting the element that has id "#dnum".
    let dnum = document.querySelector("#dnum");

    // Getting values from the HTML element and stored in "dnum" variable.
    let dnumVal = parseFloat(dnum.value);

    // If the entered value is in a correct form of number, execute the "greaterPart" function. Otherwise, alert user that the entered value is not valid.
    if (!isNaN(dnumVal)) {
        greaterPart(dnumVal);
    } else {
        alert("Enter a valid decimal number")
    } // end else

} // end evaluateSubmit

// This function is used to identify the greater number of a user provided decimal number. For instance, if the user provide the input 12.11, then the greater number is 12.
const greaterPart = (greaterNumber) => {

    // store the decimal value inside the argument "greaterNumber" in a variable "dnum".
    let dnum = greaterNumber;

    // Declaring a variable "greaterPart". This variable will contain the greater number of the decimal that user provided.
    let greaterPart;


    // If the number is above zero then do the further execution, otherwise alert the user that the number must be greater than zero.
    if (dnum > 0) {

        // convert the decimal into string so that its easier to split the number in 2 parts. For instance, If the number is 12.11, then it will become '12.11'.
        let dstr = dnum.toString();

        // split the decimal number based on period ('.'). So '12.11' is split to '12' and '11'. These numbers are stored in array. arr[0] contains '12' and arr[1] contains '11'.
        let dstrArr = dstr.split(".");

        // If there is a second value then the number is not 'n' or 'n.0'. So we can compare the two values and find out the greater part.
        if (dstrArr[1]) {

          /*
            I converted the entire decimal value as string datatype (on line 34), and split them based on the decimal point (.)
            I have to convert those splited values (For instance: '12' and '11') back to its numeric datatype (12 and 11).
            Note (string datatype '12' is not equal to numeric datatype 12). In order to represent a string datatype to its numeric datatype ('12' to 12).
            The '+' is placed before the variables in (line 51).
            This '+' operator will return the numeric representation (12) of the string datatype ('12').

             If the value of first index (left side) is greater than the value of second index (right side) then the first index value is greater.
          */
            if (+dstrArr[0] > +dstrArr[1]) {
                greaterPart = dstrArr[0];
            } // end if

            // If the value of first index (left side) is less than the value of second index (right side) then the second index value is greater.
            else {
                greaterPart = dstrArr[1];
            } // end else

        } // end if(dstrArr)

        // If there is no other part after the decimal point in a numeric value, then the number before the decimal value is greater.
        else {
            greaterPart = dstrArr[0];
        } // end else

        alert(greaterPart);

    } // end if (dnum > 0)

    // Alert the user to enter decimal number that is greater than 0.
    else {
        alert("The decimal number should be greater than 0")
    } // end else

} // end const greaterPart
