import PropTypes from 'prop-types'
import './index.css';
const Header = ({user_name,age,work,onAdd,show}) => {
    return (
        <header className='header'>
            <h1 style={{margin:'auto'}}>{user_name}</h1>
            <ul type="none" style={{textAlign: 'center',display:'flex',margin:'auto'}}>
                <li>Age: {age}</li>
                <li>Profession: {work}</li>
                <li>Contact</li>
                <li>About</li>
                <li><button className="btn"  onClick={onAdd} >Add Tasks</button></li>
            </ul>
        </header>
    )
}

Header.propTypes = {
    user_name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    work: PropTypes.string.isRequired,
    onAdd:PropTypes.func,
}
//using another method for props use props_name's in  parenthesis like ({user_name,age,work}) like this
//define props with default props
//component_name.defaultProps = {values like object}
Header.defaultProps = {
    user_name: 'Raj',
    age:19,
    work:'ce'
}
//we can use propTypes for required
//define class with using below method
// class Header extends React.Component {
//     render(props){
//         return (
//             <>
//             <h1>hii</h1>
//             </>
//         )
//     }
// }
export default Header
