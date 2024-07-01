import userStore from '../../store/users-store';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css';



export const renderButtons = (element) => {

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev ';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = userStore.getCurrent();

    element.append( prevButton, currentPageLabel , nextButton);


    nextButton.addEventListener('click', async() => {
        await userStore.loadNextPage();
        currentPageLabel.innerText = userStore.getCurrent();
        renderTable(element);

    });

    prevButton.addEventListener('click', async() => {
        await userStore.loadPreviousPage();
        currentPageLabel.innerText = userStore.getCurrent();
        renderTable(element);

    });


    




    


}