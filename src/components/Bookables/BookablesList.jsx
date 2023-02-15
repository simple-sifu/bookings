import {useState, Fragment } from 'react';
import data from '../../static.json';


export default function BookablesList() {
    const [group, setGroup] = useState("Kit");
    const {bookables, sessions, days} = data;
    const bookablesInGroup = bookables.filter( bookable => (bookable.group === group))
    const [bookableIndex, setBookableIndex] = useState(0);
    const groups = [...new Set(bookables.map(bookable => (bookable.group)))]
    const bookable = bookablesInGroup[bookableIndex];

    const [hasDetails, setHasDetails] = useState(false);

    function nextBookable() {
        setBookableIndex(prevBookableIndex => ((prevBookableIndex + 1) % bookablesInGroup.length))
    }


    return (
        <Fragment>
            <div>
                <select 
                    value={group}
                    onChange={(e)=> setGroup(e.target.value)}
                >
                    {groups.map(group => <option value={group} key={group}>{group}</option> )}
                </select>
            </div>


        </Fragment>

    )
}