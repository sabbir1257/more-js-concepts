function checkAge() {
     const ageField = document.getElementById('age');
     const ageText = ageField.value;
     const errorTag = document.getElementById('error');
     try {
          const age = parseInt(ageText);

          if (isNaN(age)) {
               throw "Please enter a number";
          }
          else if (age < 18) {
               throw "bacha kaccha not allowed";
          }
          else if (age > 30) {
               throw "murobbi ra aikhan aisen na";
          }
          errorTag.innerHTML = '';
     }
     catch (err) {
          console.log('ERROR:', err);
          errorTag.innerHTML = 'ERROR:' + err;
     }
     finally {
          console.log('All done inside try catch');
     }
     console.log(1111);
}

function hellow(){
     setTimeout(() => {
          console.log('hellow wold')
     }, 5000)
}

hellow();

function delayedGreeting(name, delayTime){
     setTimeout(() => {
          console.log('hellow', name)
     }, delayTime)
}

delayedGreeting('sabbir', 5000)


const fetc = async() => {
     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
     const data = await res.json()
     console.log(data);
}

fetc();