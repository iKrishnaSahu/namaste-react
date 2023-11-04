import { Component } from "react"
import { User } from "./User"
import { UserClass } from "./UserClass"

const AboutUs = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Lorem Ipsum</p>
            {/* <User name={"Krishna Sahu Function"} /> */}
            <UserClass name={"Krishna Sahu Class"} location={"Amravati"}/>
        </div>
    )
}

export default AboutUs;

// export class AboutUs extends Component {

//     componentDidMount() {
//         // console.log("AboutUs componentDidMount");
//     }

//     render() {
//         return (
//             <div>
//                 <h1>About Us</h1>
//                 <p>Lorem Ipsum</p>
//                 {/* <User name={"Krishna Sahu Function"} /> */}
//                 <UserClass name={"Krishna Sahu"} location={"Amravati"} />
//             </div>
//         )
//     }
// }