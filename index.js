// Function to show the vault codes in a popup dialog
function showVaultCodes() {
    // Step 1: Define the secret message
    var secretMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

    // Step 2: Perform calculations to determine the vault codes
    var code1 = 5 + 5;    // Addition
    var code2 = 50 - 10;   // Subtraction
    var code3 = 3 * 13;    // Multiplication

    // Step 3: Create the message that includes the vault codes
    var message = secretMessage + "\nVault Code 1: " + code1 + "\nVault Code 2: " + code2 + "\nVault Code 3: " + code3;

    // Step 4: Display the message in an alert dialog
    alert(message);
}

// Call the function when the page loads
window.onload = showVaultCodes;
