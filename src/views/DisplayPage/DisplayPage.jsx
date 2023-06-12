/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
const DisplayPage = ({ counterState }) => {
    console.log('props of display page', counterState);
    return (<>
        {counterState.count > 0 ? (<div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a style={{ color: "blue", margin: 10 }} href="#" onClick={() => window.history.back()}> {"<- Go Back"}</a>
            <h1 style={{ margin: 10 }}>Hai, welcome to display page, {counterState.count}</h1>
            {/* api call data */}
            {counterState.data.length > 0 && (<table style={{ margin: 10, border: "1px solid" }}>
                <thead>
                    <tr style={{ border: "1px solid" }}>
                        <th style={{ border: "1px solid" }}>S.No</th>
                        <th style={{ border: "1px solid" }}>Name</th>
                        <th style={{ border: "1px solid" }}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {counterState.data.map((item) => (
                        <tr style={{ border: "1px solid" }}>
                            <td style={{ border: "1px solid" }}>{item.id}</td>
                            <td style={{ border: "1px solid" }}><a href="#" onClick={() => alert(`you'd clicked on ${item.name} with emailId as ${item.email} and postId as ${item.postId}`)}>{item.name}</a></td>
                            <td style={{ border: "1px solid" }}>{item.email}</td>
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
