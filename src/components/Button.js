import Button from '@mui/material/Button';


const ButtonComponent = ({ color, text }) => {
    return <Button style={{ backgroundColor: color }}>{text}</Button>
}

export default ButtonComponent