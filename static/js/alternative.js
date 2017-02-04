"use strict";

let projectsArray = [];
let imagesArray = [];
let projectsObj = {};
let imagesObj = {};

const loadData = (url) => {  
  return new Promise((resolve,reject) => {
    $.getJSON(url)
      .done((json) => resolve(json))
      .fail((xhr, status, err) => reject(status + err.message));
  });
}


const jsonData = [
    '../../data/projects_jquery.json',
    '../../data/project_images_jquery.json'
  ];
const promises = jsonData.map(loadData);

Promise.all(promises)  
  .then((data) => {
     // if ALL promises fulfill
     projectsArray = data[0];
     imagesArray = data[1];
     projectsArray.map((prjct) => projectsObj[prjct.projectID] = prjct);
     imagesArray.map((prjct) => imagesObj[prjct.projectID] = prjct.images);
     console.log(projectsObj);
     console.log(imagesObj);
     // let zip = (d1,d2) => d1.map((x,i) => [x, d2[i]]);
     displayProjects(projectsArray);
     data.forEach((item) => {
       // process each item
       // console.log(item);
       // item.map(displayProjects);
     });
  })
  .catch((err) => {
    // catch failure of first failed promise
    console.log("Failed: ", err);
  });



const cardHTML =
    `<li class='project'>
      <a href='#projects'>
        <img class='project-photo-thumbs' src='' />
        <div class='project-summary'>
          <h3 class='card-prjct-title'></h3>
          <p class='card-prjct-summary'></p>
        </div>
      </a>
    </li>`

const projectHTML =
    `<h2 class='prjct-title'></h2>
    <h4 class='prjct-date'></h4>
    <br />
    <br />
    <p class='prjct-description'></p>
    <p class='prjct-problem'></p>
    <p class='prjct-solution'></p>
    <p class='prjct-future'></p>
    <br />
    <h4 class='prjct-partners'></h4>
    <h4 class='prjct-techstack'></h4>
    <br />
    <br />
    <a class='prjct-github' href=''></a>
    <br />
    <a class='prjct-deployed' href=''></a>`

const galleryImage =
    `<img class='gallery-photo' src='' />`


$('div.row.project-details').hide();

function displayProjects(data) {
    console.log('Called to display each piece of data for ' + data.length + ' projects.');
    let number = data.length;
    for(let i=0; i<number; i++) {
        if(i in data) {
            layoutGrid(data[i]);
            projectContent(data[i]);
        }
    }

    let currentProject = 0;
    let projectImagesList = [];
    let currentIndex = 0;
    let interval = 0;

    // make cards clickable
    $('ul').delegate('li','click',expandProject);
    // handle click events to show project in detail
    function expandProject(e) {
        if(interval)
            clearInterval(interval);
        setCurrentProject(this.id);
        initializeProject(this.id)
        // show complete html
        $('i.fa-pause').hide();
        $('i.fa-play').show();
        $('div.row.project-details').show();
    }

    function setCurrentProject(id) {
        currentProject = id;
        console.log(currentProject);
    }

    function initializeProject(id) {
        projectText(id);
        projectImagesList = imagesObj[id];
        projectImage(0);
        loadGallery(0);
    }

    // fills in project text
    function projectText(id) {
        // initialize html container for projectHTML
        $('div.project-text').html(projectHTML);
        // set text based on currentProject
        let project = projectsObj[id];
        $('h2.prjct-title').html(project.title);
        $('h4.prjct-date').html(project.date);
        $('p.prjct-description').html(project.description);
        $('p.prjct-problem').html(project.problem);
        $('p.prjct-solution').html(project.solution);
        $('p.prjct-future').html(project.future);
        $('h4.prjct-partners').html(project.partners);
        $('h4.prjct-techstack').html(project.techstack);
        $('a.prjct-github').html(project.github);
        $('a.prjct-deployed').html(project.deployed);
    }
    // displays project image as feature
    function projectImage(index) {
        $('img.project-photo-feature').attr('src',projectImagesList[index].url);
        $('p.project-caption').html(projectImagesList[index].caption);
    }
    // displays remaining project images in gallery
    function loadGallery(index) {
        $('div.project-gallery').empty();
        // let isEmpty = $('div.project-gallery').children().length;
        for(let i=1; i<projectImagesList.length; i++) {
            $('div.project-gallery').append(galleryImage);
            let shift = Math.abs(i+index) % projectImagesList.length;
            $('img.gallery-photo').last().attr('id',shift);
            $('img.gallery-photo').last().attr('src',projectImagesList[shift].url);
        }
    }


    // // if want to cycle through images automatically at loading, delay of 1000
    // function startAutoplay(projectImagesList) {
    //     setTimeout(() => cycleImages(projectImagesList,currentIndex), 1000);
    // }



    function slideshowControls() {
        $('i.fa-play').toggle();
        $('i.fa-pause').toggle();
    }

    const prevImage = () => {
        let continuous = projectImagesList.length;
        let index = Math.abs(currentIndex-1) % continuous;
        console.log(continuous,index);
        projectImage(index);
        loadGallery(index);
        currentIndex = index;
    }

    const nextImage = () => {
        let continuous = projectImagesList.length;
        let index = Math.abs(currentIndex+1) % continuous;
        console.log(continuous,index);
        projectImage(index);
        loadGallery(index);
        currentIndex = index;
    }

    $('i.fa-step-backward').on('click',prevImage).on('click',stopAutoplay);
    $('i.fa-step-forward').on('click',nextImage).on('click',stopAutoplay);

    // cycle through images
    function cycleImages() {
        nextImage(currentIndex);
        let continuous = projectImagesList.length;
        interval = setInterval(() => {
            let index = Math.abs(currentIndex+1) % continuous;
            projectImage(index);
            loadGallery(index);
            currentIndex = index;
        }, 3000);
        console.log(interval);
    }

    $('i.fa-play').on('click',slideshowControls)
        .on('click',cycleImages)
        .on('click',function() {
            console.log(projectImagesList);
            console.log(currentIndex);
        });

    $('i.fa-pause').on('click',slideshowControls)
        .on('click',stopAutoplay)
        .on('click',function() {
            console.log(interval);
        });

    // make images in gallery clickable to go to that image as feature
    // $('div.project-gallery').delegate('img', 'click', featureImage);

    function featureImage(e) {
        console.log(this.id);
        currentIndex = this.id;
        projectImage(currentIndex);
        loadGallery(currentIndex);
        console.log(currentIndex);
    }


    function stopAutoplay() {
        clearInterval(interval);
        $('i.fa-pause').hide();
        $('i.fa-play').show();
    }

    // // when no project is to be displayed in project-details container
    // function resetProject() {
    //     stopAutoplay();
    //     $('div.row.project-details').hide();
    // }

    // instantiate grid
    function layoutGrid(card) {
        $('div.grid-content').append(cardHTML);
        $('li.project').last().attr('id',card.projectID);
    }
    // fill cards with project data
    function projectContent(project) {
        $('img.project-photo-thumbs').last().attr('src',project.thumbURL);
        $('h3.card-prjct-title').last().html(project.title);
        $('p.card-prjct-summary').last().html(project.summary);
    }

}


