const url = 'rapidapi.com';

async function getAllItems() {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data:', data);
    }
    catch(error) {
        console.error('There was a problem with a fetch operaton', error);
    }
}

getAllItems();