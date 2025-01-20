const button = document.querySelector('.button');
      const container = document.querySelector('.container');

        const numbs = ['one', 'two', 'three', 'four', 'five'];

        button.addEventListener('click', function handleclick() {

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
      });