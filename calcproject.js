/*// Get the Variable from the input box
function screen(val)
        {
        document.getElementById("calcNum").value=val;
        }

// Concatenating Values
function showNum(val)   {
        document.getElementById("calcNum").value+=val;
        }

// Performing the Calculation
function solve() { 
    try     { 
            screen(eval(document.getElementById("calcNum").value)) 
            } 
    catch(e) {
            screen('Error') 
            } 
}
// Clear the Input Screen
function clearMe() {
                document.getElementById("calcNum").value = "";
                } 
// Backspace Function

function delback() {
                var valueNeeded = document.getElementById("calcNum").value;
                var finalValueNeeded = valueNeeded.substr(0, valueNeeded.length-1); 
                document.getElementById("calcNum").value=finalValueNeeded;
                
                } 

*/
function screen(val) {
    document.getElementById("calcNum").value = val;
};

function showNum(val) {
    document.getElementById("calcNum").value += val;
};

function solve() {
    try {
        screen(eval(document.getElementById("calcNum").value));
    }
    catch (e) {
        screen('Error');
    };
};

function clearMe() {
    document.getElementById("calcNum").value = "";
}; 