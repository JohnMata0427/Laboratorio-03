//// 1. Variables

    // A. Data types
    // Simple data types -> Number, String, Boolean

    // Number
    let numeroLikes = 10
    let numeroPorcentaje = 5.52

    // String
    let canalNombre = "Auronplay"

    // Boolean
    let canal_en_decadencia = true
    let canal_en_decadencia2 = false

    // Complex data types -> Object, Array, Function

    // Object
    let informacion = {
        nombreCanal: "Rubius",
        numSuscriptores: 200000,
        nombreDueño: "Ruben"
    }

    // Array
    let streamers = ["Auron", "Putupau", "Willirex"]

    // Function

    function sumaDeSuscriptores(a,b){
        return a + b
    }

    // B. Variables Types

    // Let
    let nombreCanal = "xd";
    nombreCanal = "Putupau";
    console.log(nombreCanal); // Let variables can be reassigned but not redeclared

    // Const
    const suscriptores = 5000
    // suscriptores2 = 10000 -> This is not possible because it is a const variable
    console.log(suscriptores);

    const nombres = {
        nombre: "Putupau",
        edad: 20
    }
    nombres.nombre = "xd"
    console.log(nombres); // In the case of objects, their values can be edited even if the object was declared with const

    // Var
    var suscriptores1 = 100
    var suscriptores1 = 200
    console.log(suscriptores1); // Var variables can be reassigned and redeclared

    // C. Scope and Hoisting

    // Global Scope
    var descripcionCanal = "1 Que tal amigos de YouTube, como estan"
    function saludo(){
        console.log(descripcionCanal);
    }
    saludo(); // In this case the variable can be called from anywhere in the code

    // Local Scope
    function saludo2(){
        let descripcionCanal2 = "2 Que tal amigos de YouTube, como estan"
        console.log(descripcionCanal2);
    }
    // console.log(descripcionCanal2) -> Error
    saludo2(); // In this case the variable can only be called from the function where it was declared


    // Block Scope
    {
        let descripcionCanal3 = "3 Que tal amigos de YouTube, como estan"
        console.log(descripcionCanal3);
    }
    // console.log(descripcionCanal3) -> In this case the variable can only be called from the block where it was declared

    // Variable Hoisting

    // console.log(mensajeCanal) -> In this case, the program will not throw an error, but it will print "undefined" because the variable is declared after its call
    var mensajeCanal = "Que tal amigos de YouTube, como estan";

    // Function Hoisting
    saludoCanal()
    function saludoCanal(){
        console.log("Que tal amigos de YouTube, como estan");
    } // In this case, the program will not throw an error, because the function is declared before its call

////

//// 2. Strings

    // A. Properties and Methods

    // Length

    let name = "Fix You - Abominable (Coldplay) Violin & Original"
    console.log(name.length) // The length property of a String object returns the length of a string, in the form of a number.

    // Includes

    let channelName = "Cobra Kai"
    console.log(channelName.includes("Cobra")) // This method determines whether one string may be found within another string, returning true or false as appropriate.

    // ToUpperCase

    let movie = "TOP GUN: MAVERICK | Miles Teller - Great Balls of Fire [Official Video] | Paramount Pictures AU"
    console.log(movie.toUpperCase()) // This method returns the calling string value converted to uppercase.

    // ToLowerCase

    let music = "Gorillaz - DARE (Official Video)"
    console.log(music.toLowerCase()) // This method returns the calling string value converted to lowercase.

    // Trim

    let video1 = "     Back to the Future | Marty McFly Plays Johnny B. Goode and Earth Angel    "
    console.log(video1.trim()) // The trim() method removes whitespace from both ends of a string.

    // Replace

    let nameChannel = "@SonyAnimation"
    console.log(nameChannel.replace("@", "")) // The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

    // Slice

    let space = "GUARDIANS OF THE GALAXY 2 - Mr Blue Sky (By: Electric Light Orchestra) (Subtitulado EspaĆ±ol, Lyrics)"
    console.log(space.slice(0,-30)) // The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

    // Substring

    let page = "TopMovieClips"
    console.log(page.substring(3,8)) // The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

    // CharAt

    let song = "The Weeknd - Blinding Lights (Official Video)"
    console.log(song.charAt(0)) // The charAt() method returns the specified character from a string.

    // Repeat

    let movieScene = "'A Lovely Night' Scene | La La Land "
    console.log(movieScene.repeat(2)) // The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

    // Split

    let movieTitle = "GREASE | Hopelessly Devoted Clip | Paramount Movies"
    console.log(movieTitle.split("|")) // The split() method is used to split a string into an array of substrings, and returns the new array.

    // StartsWith

    let start = "Deadpool (La Uno y La Dos) | #TeLoResumo"
    console.log(start.startsWith("Dos")) // The startsWith() method determines whether a string begins with the characters of a specified string.

    // EndsWith

    let ends = "Deadpool (La Uno y La Dos) | #TeLoResumo"
    console.log(ends.endsWith("Deadpool"))
    console.log(ends.endsWith("Resumo")) // The endsWith() method determines whether a string ends with the characters of a specified string.

    // B. Template Literals

    let views = 945612619
    console.log(`Michael Jackson - Smooth Criminal (Official Video) ${views} views`) // Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

////

//// 3. Numbers

    let suscritos = 5250
    let likes = "1500"
    console.log(suscritos);
    console.log(likes);
    console.log(typeof(suscritos),'\n',typeof(likes)); // The typeof operator returns a string indicating the type of the unevaluated operand.

    // A. Operations

    // Difference
    let likes2 = Number.parseInt(likes)
    let dislike = 200
    console.log("Diferencia de likes y dislikes:",likes2-dislike); // The - operator subtracts numbers

    // Sum
    let visualizacionesVideo1 = 2500
    let visualizacionesVideo2 = 3000
    console.log("Total de visualizaciones:", visualizacionesVideo1+visualizacionesVideo2); // The + operator adds numbers

    // Multiplication
    let suscritosPorHora = 25
    let totalSuscritos = suscritosPorHora * 2
    console.log("Suscritos en 2 horas:", totalSuscritos) // The * operator multiplies numbers

    // Division
    let totalSuscritosPorHora = totalSuscritos / 60
    console.log("Se suscriben alrededor de",totalSuscritosPorHora,"por minuto") // The / operator divides numbers

    // Modulus
    let likes3 = 1000
    let likes4 = 200
    let resultado = likes % likes2
    console.log("Modulo:",resultado) // The % operator returns the division remainder

    // Increment
    let comentarios = 200
    console.log("Incremento:",++comentarios); // The ++ operator increments numbers

    // Decrement
    let comentarios2 = 210
    console.log("Decremento:",--comentarios2); // The -- operator decrements numbers

    // B. Math Object

    // PI
    console.log("Obtener valor de PI:",Math.PI) // The Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159

    // Round
    console.log("Redondear un número:", Math.round(2.5)) // The Math.round() function returns the value of a number rounded to the nearest integer.

    // Ceil
    console.log("Redondeo a un número mayor:",Math.ceil(2.1)) // The Math.ceil() function returns the smallest integer greater than or equal to a given number.

    // Floor
    console.log("Redondeo al inmediato inferior:",Math.floor(2.9)) // The Math.floor() function returns the largest integer less than or equal to a given number.

    // Square root
    console.log("Raíz cuadrada de un número:", Math.sqrt(144)) // The Math.sqrt() function returns the square root of a number.

    // Potency
    console.log("Potencia de un número:",Math.pow(2, 4)) // The Math.pow() function returns the base to the exponent power, that is, baseexponent.

    // Absolute value
    console.log("Valor absoluto:", Math.abs(-450)); // The Math.abs() function returns the absolute value of a number.

    // Random number
    console.log("Obtener un número aleatorio:",Math.random() * 100) // The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1

    // Random number between two numbers
    console.log("Valor aleatorio entre dos números:",Math.floor(Math.random() * (100 - 50) + 50)) // The Math.floor() function returns the largest integer less than or equal to a given number.

    // C. Operator Precedence
    let resultado1 = 20 + 30 / 2
    console.log("Resultado:",resultado1) // The / operator has a higher precedence than the + operator

    let resultado2 = (20 + 2) * 10 + 1
    console.log("Resultado:",resultado2); // The parentheses have the highest precedence

    // D. Type Conversion

    // String to Number
    let likesCanal1 = "3000"
    let likesCanal2 = "5000"
    console.log("Los canales tienen en total:",Number.parseInt(likesCanal1) + Number.parseInt(likesCanal2)," Likes"); // The Number.parseInt() function parses a string argument and returns an integer of the specified radix

    // ES6 Unary operator
    console.log("Total de likes:",+likesCanal1 + +likesCanal2);
    console.log("Total de likes:",+likesCanal1 + 100); 
    console.log("Total de likes:",2 + +likesCanal2); // The + operator can be used to convert a string to a number

////

//// 4. Booleans

    // A. Strict Equality

    console.log(1 === 1) // The strict equality operator returns true if the operands are equal and of the same type

    console.log(1 === '1') // The strict equality operator returns false if the operands are equal but of different types

    // B. Falsy and Truthy Values

    // Falsy values

    console.log(Boolean(undefined)) 

    console.log(Boolean(null))

    console.log(Boolean(0))

    console.log(Boolean(''))

    console.log(Boolean(NaN))

    console.log(Boolean(false))

    // console.log(Boolean(document.all)) -> This is a browser-specific value

    // Truthy values

    console.log(Boolean({}))

    console.log(Boolean([]))

    console.log(Boolean(42)) // Any number that is not 0 is truthy

    console.log(Boolean('0')) // Any string that is not empty is truthy

    console.log(Boolean(new Date()))

    console.log(Boolean(Infinity))

    console.log(Boolean(() => {}))

    // C. Assignment Operators

    let x = 5

    console.log(x = 10) // The = operator assigns a value to a variable

    console.log(x += 5) // The += operator adds a value to a variable

    console.log(x -= 5) // The -= operator subtracts a value from a variable

    console.log(x *= 5) // The *= operator multiplies a variable by a value

    console.log(x /= 5) // The /= operator divides a variable by a value

    console.log(x %= 5) // The %= operator assigns the remainder of a variable divided by a value

    console.log(x **= 5) // The **= operator assigns the result of a variable raised to the power of a value

    console.log(x &= 5) // The &= operator assigns the result of a variable bitwise AND a value

    console.log(x |= 5) // The |= operator assigns the result of a variable bitwise OR a value

    console.log(x ^= 5) // The ^= operator assigns the result of a variable bitwise XOR a value

    console.log(x <<= 5) // The <<= operator assigns the result of a variable left-shifted by a value

    console.log(x >>= 5) // The >>= operator assigns the result of a variable right-shifted by a value

    console.log(x >>>= 5) // The >>>= operator assigns the result of a variable right-shifted by a value with zero fill

    console.log(x &&= 5) // The &&= operator assigns the result of a variable logical AND a value

    console.log(x ||= 5) // The ||= operator assigns the result of a variable logical OR a value

    console.log(x ??= 5) // The ??= operator assigns the result of a variable nullish coalescing a value

    // D. Comparison Operators

    console.log(5 == 5) // The == operator returns true if the operands are equal

    console.log(5 != 5) // The != operator returns false if the operands are equal

    console.log(5 > 5) // The > operator returns false if the left operand is less than or equal to the right operand

    console.log(5 < 5) // The < operator returns false if the left operand is greater than or equal to the right operand

    console.log(5 >= 5) // The >= operator returns true if the left operand is greater than or equal to the right operand

    console.log(5 <= 5) // The <= operator returns true if the left operand is less than or equal to the right operand

    // E. Ternary Operator

    let likesOfChannel = 1000
    let message = likesOfChannel > 1000 ? 'Canal popular' : 'Canal no popular'
    
    console.log(message) // The ternary operator is the only JavaScript operator that takes three operands

////

//// 5. Control Structure: Conditionals

    // A. Simple (if statement)

    let numberSubs = 0;
    let buttonSubs = 'click'

    if(buttonSubs === 'click'){
        numberSubs = numberSubs + 1;
        console.log(numberSubs);
    }

    // ES6 Ternary operator
    buttonSubs === 'click' ?  console.log("Nuevo subscriptor") : '';

    // -> The function every time the variable buttonSubs has the content click then it will increase in numberSbs a new subscriber and print it

    // B. Double (if else statement)

    let numberSubs1 = 0;
    let buttonSubs1 = false

    if(buttonSubs1 === true){
        numberSubs1 = numberSubs + 1;
        console.log(numberSubs);
    }else{
        console.log('Tienes un subscritor menos');
    }

    // ES6 Ternary operator
    buttonSubs ?  console.log("NUevo subscriptor") :console.log('Tienes un subscriptor menos');

    // -> The function every time the variable buttonSubs has the content click then it will increase in numberSbs a new subscriber and print it, otherwise it will print that you have one less subscriber

    // C. Multiple (if else if else statement, switch statement)

    // if else if else statement

    let channels = ['AuronPlay', 'Mr. Beast', 'Replis', 'Top Comics'];
    let channel1 = 'Replis'; // Change the value to test the different cases

    if (channel1 === 'AuronPlay') {
        console.log('Bienvenido al canal de Auron Play');
    } else if (channel1 === 'Mr. Beast') {
        console.log('Bienvenido al canal de Mr. Beast');
    } else if (channel1 === 'Replis') {
        console.log('Bienvenido al canal de Replis');
    } else if (channel1 === 'Top Comics') {
        console.log('Bienvenido al canal de Top Comics');
    } else {
        console.log('Canal no reconocido');
    }

    // switch statement

    switch (channel1) {
    case 'AuronPlay':
        console.log('Bienvenido al canal de Auron Play');
        break;
    case 'Mr. Beast':
        console.log('Bienvenido al canal de Mr. Beast');
        break;
    case 'Replis':
        console.log('Bienvenido al canal de Replis');
        break;
    case 'Top Comics':
        console.log('Bienvenido al canal de Top Comics');
        break;
    default:
        console.log('Canal no reconocido');
    }

    // D. Nested (if statement)

    let channelA = 'AuronPlay'

    if(channelA === 'AuronPlay'){
        console.log('BIenvenido al canal de Auron play');
        console.log('Te gusto el video?');
        let question = 'like'
        if(question === 'like'){
            console.log('Se agrego a tus favoritos');
        }else{
            console.log('No recomendaremos este tipo de videos');
        }
    }else{
        console.log('Bienvenido a Mr. Beast');
    }

////

//// 6. Control Structure: Loops

    // For loop

    let playList = ['I Did It My Way', 'Respect', 'Imagine', 'Born to Run', 'Louie Louie', 'Maybellene'];

    for (let i = 0; i < 3; i++) {
        console.log(`Canción ${i + 1} -> ${playList[i]}`); // The loop will iterate 3 times
    }

    // While loop

    const musicArtists = ['The Beatles', 'The Rolling Stones', 'The Who', 'The Kinks'];

    let count = 0;

    while (count < musicArtists.length) {
        console.log(`Artista ${count + 1} -> ${musicArtists[count]}`);
        count++; // This is important to avoid infinite loops
    }

    // Do while loop

    const luisitoComunicaVideos = ['Viaje a Japón', 'Viaje a Corea del Sur', 'Viaje a China', 'Viaje a Tailandia'];

    let counter = 0;
    let extraCondition = false;

    do {
        console.log(`Video de Luisito Comunica ${counter + 1} -> ${luisitoComunicaVideos[counter]}`);
        counter++;
        if (counter === 0) extraCondition = true;
    } while (counter < luisitoComunicaVideos.length && extraCondition); // The loop will iterate at least once, even if the first condition is false

    // For of loop

    const auronplayTypeVideos = ['Bromas telefónicas', 'Gameplays', 'Vlogs', 'Entrevistas'];

    for (const video of auronplayTypeVideos) {
        console.log(`Tipo de video de Auronplay -> ${video}`); // The loop will iterate as many times as elements in the array
    }

    // For in loop

    const historiaParaTontosChannel = {
        idYoutube: '@historiaparatontosoficial',
        name: 'Historia para Tontos Oficial',
        types: [
            'Historia',
            'Comedia'
        ],
        suscribers: 1.37 * 10 ** 6,
        videos: 409,
        views: 303783395,
        country: 'Mexico',
        dateCreation: '2021-03-30'
    };

    for (const key in historiaParaTontosChannel) {
        console.log(`${key}: ${historiaParaTontosChannel[key]}`); // The loop will iterate as many times as properties in the object
    }

    // forEach loop

    const midudevVideos = ['Curso de JavaScript', 'Curso de React', 'Curso de Node.js', 'Curso de Angular', 'Curso de Vue.js', 'Curso de Svelte', 'Curso de TypeScript'];

    midudevVideos.forEach((video, index) => console.log(`Video de Midudev ${index + 1} -> ${video}`)); // There is no control over the flow

    // Map loop

    const MrBeastVideos = [['The Real Life Squid Game for $456,000','The last one to leave the circle wins $500,000', '$1 Plane Ticket Vs. $500,000!', '1-100 People Fight for $1,000,000', '$1 Hotel Room Vs. $1,000,000!'], ['607M views', '434M views', '374M views', '372M views', '345M views']];

    const mostPopularMrBeastVideos = MrBeastVideos[0].map((video, index) => `${video} -> ${MrBeastVideos[1][index]}`); // Map returns a new array

    console.log(mostPopularMrBeastVideos);

////

//// 7. Functions

    // Function declaration

    function createChannel(name) {
        console.log(`Canal creado: ${name}`);
    }

    createChannel('El canal de Juanito');

    // Function expression

    const createVideo = function newVideo(title) {
        console.log(`Video creado: ${title}`);
    }

    createVideo('Mi primer video');

    // Anonymous function

    const countViews = function (...views) {
        let totalViews = 0;
        for (const view of views) {
            totalViews += view;
        }
        return totalViews;
    }

    console.log(`Total de vistas: ${countViews(100, 200, 300, 400)}`);

    // IIFE (Immediately Invoked Function Expression)

    (function () {
        console.log('Abriendo la aplicación de YouTube...');
    })();

    // Arrow function

    const createPlaylist = (name) => console.log(`Lista de reproducción creada: ${name}`);

    createPlaylist('Mis canciones favoritas');

    // Callback function

    function createVideoWithCallback(title, callback) {
        console.log(`Video creado: ${title}`);
        callback();
    }

    createVideoWithCallback('Mi segundo video', () => console.log('Video subido a YouTube'));

    // Rest parameters

    function countLikes(...likes) {
        let totalLikes = 0;
        for (const like of likes) {
            totalLikes += like;
        }
        return totalLikes;
    }

    console.log(`Total de likes: ${countLikes(10, 20, 30, 40)}`);

    // Default parameters

    function createComment(comment = 'Sin comentarios') {
        console.log(`Comentario creado: ${comment}`);
    }

    createComment('Excelente video');
    createComment();

    // This keyword

    const channel = {
        name: 'Pepito',
        createVideo() {
            console.log(`Video creado en el canal ${this.name}`);
        }
    }

    channel.createVideo();

////