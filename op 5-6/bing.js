const button = document.querySelector('.button');
      const container = document.querySelector('.container');
let totalones = 0;
let totaltwos = 0;
let totalthrees = 0;
let totalfours = 0;
let totalfives = 0;
        const numbs = ['one', 'two', 'three', 'four', 'five'];

        button.addEventListener('click', function handleclick() {
          totalones = 0;
          totaltwos = 0;
          totalthrees = 0;
          totalfours = 0;
          totalfives = 0;

          let randomNumber1 = Math.floor(Math.random() * 6) + 1;
          let randomNumber2 = Math.floor(Math.random() * 6) + 1;
          let randomNumber3 = Math.floor(Math.random() * 6) + 1;
          let randomNumber4 = Math.floor(Math.random() * 6) + 1;
          let randomNumber5 = Math.floor(Math.random() * 6) + 1;

          document.getElementById('een').textContent = `${randomNumber1}`;
          document.getElementById('twee').textContent = `${randomNumber2}`;
          document.getElementById('drie').textContent = `${randomNumber3}`;
          document.getElementById('vier').textContent = `${randomNumber4}`;
          document.getElementById('vijf').textContent = `${randomNumber5}`;

          if(randomNumber1 === 1){
            totalones += 1
          }
          if(randomNumber2 === 1){
            totalones += 1
          }
          if(randomNumber3 === 1){
            totalones += 1
          }
          if(randomNumber4 === 1){
            totalones += 1
          }
          if(randomNumber5 === 1){
            totalones += 1
          }
          if(randomNumber1 === 2){
            totaltwos += 1
          }
          if(randomNumber2 === 2){
            totaltwos += 1
          }
          if(randomNumber3 === 2){
            totaltwos += 1
          }
          if(randomNumber4 === 2){
            totaltwos += 1
          }
          if(randomNumber5 === 2){
            totaltwos += 1
          }          if(randomNumber1 === 3){
            totalthrees += 1
          }
          if(randomNumber2 === 3){
            totalthrees += 1
          }
          if(randomNumber3 === 3){
            totalthrees += 1
          }
          if(randomNumber4 === 3){
            totalthrees += 1
          }
          if(randomNumber5 === 3){
            totalthrees += 1
          }          if(randomNumber1 === 4){
            totalfours += 1
          }
          if(randomNumber2 === 4){
            totalfours += 1
          }
          if(randomNumber3 === 4){
            totalfours += 1
          }
          if(randomNumber4 === 4){
            totalfours += 1
          }
          if(randomNumber5 === 4){
            totalfours += 1
          }          if(randomNumber1 === 5){
            totalfives += 1
          }
          if(randomNumber2 === 5){
            totalfives += 1
          }
          if(randomNumber3 === 5){
            totalfives += 1
          }
          if(randomNumber4 === 5){
            totalfives += 1
          }
          if(randomNumber5 === 5){
            totalfives += 1
          }
          document.getElementById('numbercounted1').textContent = "ones = "+totalones;
          document.getElementById('numbercounted2').textContent = "twos = "+totaltwos;
          document.getElementById('numbercounted3').textContent = "threes = "+totalthrees;
          document.getElementById('numbercounted4').textContent = "fours = "+totalfours;
          document.getElementById('numbercounted5').textContent = "fives = "+totalfives;
          
      });