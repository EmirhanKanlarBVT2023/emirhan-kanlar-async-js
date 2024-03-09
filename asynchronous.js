
function makeGreeting(name){
    return `Hello my name is ${name}!`;
}

const name = "Emirhan";
const greeting = makeGreeting(name);
console.log(greeting);

///////////////////////////////////////////////////////////////

//const MAX_PRIME= 1000000;
const MAX_PRIME= 100;

function isPrime(n){
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            return false;
        }
    }

    return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota){
    const primes = [];
    while (primes.length < quota){
        const candidate = random(MAX_PRIME);
        if (isPrime(candidate)){
            primes.push(candidate);
        }
    }

    return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
    const primes = generatePrimes(quota.value);
    output.textContent = `Finsihed generating ${quota.value} primes!`;

    console.log(primes);

});

document.querySelector("#reload").addEventListener("click", () => {
    document.location.reload();
});


///////////////////////////////////////////////////////////////

const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
    log.textContent = "";

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("loadend", () => {
        log.textContent = `${log.textContent}Finshed with status: ${xhr.status}`;
    });

    xhr.open(
        "GET",
        "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
    );
    xhr.send();
    log.textContent = `${log.textContent}Start XHR request\n`;
});

document.querySelector("#reload-request").addEventListener("click", () => {
    log.textContent = "";
    document.location.reload();
});

///////////////////////////////////////////////////////////////

function doStep1(init) {
    return init + 1;
  }
  
  function doStep2(init) {
    return init + 2;
  }
  
  function doStep3(init) {
    return init + 3;
  }
  
  function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`result: ${result}`);
  }
  
  doOperation();



  function doStep1_2(init, callback) {
    const result = init + 1;
    callback(result);
  }
  
  function doStep2_2(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3_2(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation_2() {
    doStep1_2(0, (result1) => {
      doStep2_2(result1, (result2) => {
        doStep3_2(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  
  doOperation_2();