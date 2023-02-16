import {useState, Fragment } from 'react';
import data from '../../static.json';
import {FaArrowRight} from 'react-icons/fa';


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
                <ul className="bookables items-list-nav">
                    {
                        bookablesInGroup.map((bookable, index) => (
                            <li 
                                key={bookable.id}
                                className={index === bookableIndex ? "selected" : null}
                            >
                                <button
                                    className="btn"
                                    onClick={() => setBookableIndex(index)}
                                >
                                    {bookable.title}
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <p>
                    <button
                        className="btn"
                        onClick={nextBookable}
                        autoFocus
                    >
                        <FaArrowRight />
                        <span>Next</span>
                    </button>
                </p>
            </div>
            {bookable && (
                <div className="bookable-details">
                    <div className="item">
                        <div className="item-header">
                            <h2>
                                {bookable.title}
                            </h2>
                            <span className="controls">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={hasDetails}
                                        onChange={() => setHasDetails(has => !has)}
                                    />
                                    Show Details
                                </label>
                            </span>
                        </div>
                        <p>{bookable.notes}</p>
                        {hasDetails && (
                            <div className="item-details">
                                <h3>Availability</h3>
                                <div className="bookable-availability">
                                    <ul>
                                        {
                                            bookable.days.sort().map(day => (
                                                <li key={day}>{days[day]} </li>
                                            ))
                                        }

                                    </ul>
                                    <ul>
                                        {
                                            bookable.sessions.map(
                                                session => <li key={session}>{sessions[session]}</li>
                                            )
                                        }
                                    </ul>
                                    
                                </div>


                            </div>    

                        )}
                    </div>
                </div>
            )}

        </Fragment>

    )
}