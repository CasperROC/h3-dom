const button = document.querySelector('.button');
      const container = document.querySelector('.container');

        const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

        button.addEventListener('click', function handleclick() {
            const number = 49;

    for (let i = 0; i < number; i++) {
        const item = document.createElement('div');
        item.classList.add('container__item');
    
        const colorIndex = container.children.length % colors.length;
        item.style.backgroundColor = colors[colorIndex];

         container.appendChild(item);
         button.removeEventListener('click', handleclick)
    }
      });