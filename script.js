function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

let choice = getComputerChoice();

    if (choice == 1) {
            console.log('Kamen');
        }

        else if (choice == 2) {
            console.log('Papir')
        }

        else {
            console.log('Makaze')
        }
