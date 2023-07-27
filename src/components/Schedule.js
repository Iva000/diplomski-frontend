import { format } from 'date-fns';

function Schedule(){

    const currentDate= new Date();

    const today = format(currentDate, 'dd.MM.yyyy.');

    return(
        <div>
            <h1>Današnji raspored</h1>
            <h3>{today}</h3>
        </div>
    );
}

export default Schedule;