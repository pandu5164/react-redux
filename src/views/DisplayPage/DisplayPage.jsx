/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
const DisplayPage = ({ counterState }) => {
    console.log('props of display page', counterState);
    return (<>
        {counterState.count > 0 ? (<div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a style={{color: "blue"}} href="#" onClick={() => window.history.back()}> {"<- Go Back"}</a>
            <h1>Hai, welcome to display page, {counterState.count}</h1>
            {/* api call data */}
            {counterState.data.length > 0 && (<table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {counterState.data.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>)}
        </div>) : (<Navigate to="/counter" />)}
    </>)
}
const mapStateToProps = state => {
    return {
        counterState: state.CounterReducer
    }
}
export default connect(mapStateToProps)(DisplayPage);
