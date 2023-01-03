const body = document.querySelector('body');
const section = document.createElement('section');
body.appendChild(section);
section.innerHTML = `
<h3>BMW</h3>
<img class="card-image" src="car.jpg" alt="" srcset="">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio, dolore in alias doloremque
   quo vero saepe provident molestiae hic iste, eligendi ullam ad aperiam beatae necessitatibus velit nisi. Alias?</p>
  
   <button type="button">See more</button>
  `;

  const open = document.querySelector('.see-more');
  open.addEventListener('click',() => {
    const main = document.createElement('div');
    const popup = document.createElement('div');
    popup.innerHTML =`<h3>BMW</h3>
    <img class="card-image" src="car.jpg" alt="" srcset="">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio, dolore in alias doloremque
       quo vero saepe provident molestiae hic iste, eligendi ullam ad aperiam beatae necessitatibus velit nisi. Alias?</p>
      
       <button class = "see-more" type="button">close</button>
    `;
  })


