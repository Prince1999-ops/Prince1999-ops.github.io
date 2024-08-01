document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const incidentFormButton = document.getElementById('incidentFormButton');
    const firstAidFormButton = document.getElementById('firstAidFormButton');
    const selectionPage = document.getElementById('selectionPage');
    const incidentForm = document.getElementById('incidentForm');
    const firstAidForm = document.getElementById('firstAidForm');
    const returnToSelectionIncident = document.getElementById('returnToSelectionIncident');
    const returnToSelectionFirstAid = document.getElementById('returnToSelectionFirstAid');

    // Show Incident Form and hide selection page
    incidentFormButton.addEventListener('click', function () {
        selectionPage.style.display = 'none';
        incidentForm.style.display = 'block';
    });

    // Show First Aid Form and hide selection page
    firstAidFormButton.addEventListener('click', function () {
        selectionPage.style.display = 'none';
        firstAidForm.style.display = 'block';
    });

    // Return to selection page from Incident Form
    returnToSelectionIncident.addEventListener('click', function () {
        incidentForm.style.display = 'none';
        selectionPage.style.display = 'block';
    });

    // Return to selection page from First Aid Form
    returnToSelectionFirstAid.addEventListener('click', function () {
        firstAidForm.style.display = 'none';
        selectionPage.style.display = 'block';
    });
});
    
