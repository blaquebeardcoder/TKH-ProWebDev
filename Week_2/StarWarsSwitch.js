const favMovie = prompt("What is your favorite movie?");
switch (favMovie) {
    case 'jaws':
        moviePhrase = alert(`You're gonna need a bigger boat`);
        break;
    
    case 'the shining':
        moviePhrase = alert('All work and no play makes Jack a dull boy.');
        break;

    case 'star wars':
        moviePhrase = alert('Do. Or do not. There is no try.');
        break;

    case 'forrest gump':
        moviePhrase = alert('Life was like a box of chocolates.');
        break;

    case 'back to the future':
        moviePhrase = alert(`Where we're going, we don't need roads..`);
        break;
        
    default:
        moviePhrase = alert('Great movie choice!');
}