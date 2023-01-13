import colors from 'colors'

let index = 0;

function simplenumber() {
    const args1 = Number(process.argv.slice(2)[0])
    const args2 = Number(process.argv.slice(2)[1])
    if (error(args1, args2)) return false
    else {
        if (args1 <= 2) {
            generatesimplenumber:
            for (var i = 2; i <= args2; i++) {
                for (var j = 2; j < i; j++) {
                    if (i % j == 0) continue  generatesimplenumber;
                }
                iter(i)
            }
        }
        else {
            generatesimplenumber:
            for (var i = args1; i <= args2; i++) {
                for (var j = 2; j < i; j++) {
                    if (i % j == 0) continue  generatesimplenumber;
                }
                iter(i);
            }
        }
    }
}

function iter(i) {
    makeyrg(i, index);

    if (index !== 2) index++
    else index = 0;
}

function makeyrg(i, index) {
    switch (index) {
        case 1:
            console.log(colors.yellow(i));
            break;
        case 2:
            console.log(colors.red(i));
            break;
        default:
            console.log(colors.green(i));
    }
}

function error(args1, args2) {
    if (isNaN(args1)) {
        console.log(colors.red('Incorrect number'));
        return true;
    }

    if (isNaN(args2)) {
        console.log(colors.red('Incorrect number'));
        return true;
    }
}

simplenumber();