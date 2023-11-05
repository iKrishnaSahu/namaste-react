import { Component } from "react"
import { User } from "./User"
import { UserClass } from "./UserClass"
import UserContext from "../utils/UserContext";

// const AboutUs = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <p>Lorem Ipsum</p>
//             {/* <User name={"Krishna Sahu Function"} /> */}
//             <UserClass name={"Krishna Sahu Class"} location={"Amravati"}/>
//         </div>
//     )
// }


class AboutUs extends Component {
    componentDidMount() {
        // console.log("AboutUs componentDidMount");
    }

    render() {
        return (
            <div>
                <h1>About Us</h1>
                <div>
                    Logged in user - <UserContext.Consumer>
                        {(data) => <span>{data.loggedInUser}</span>}
                    </UserContext.Consumer>
                </div>
                <p>Lorem Ipsum</p>
                {/* <User name={"Krishna Sahu Function"} /> */}
                <UserClass name={"Krishna Sahu"} location={"Amravati"} />
            </div>
        )
    }
}

export default AboutUs;
