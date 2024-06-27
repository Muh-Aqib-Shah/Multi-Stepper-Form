import TaskAltIcon from '@mui/icons-material/TaskAlt';


export const Success = () => {

    return(
        <div className="success-cont">
            <div className='icon-div'>
                <TaskAltIcon className='success-icon' fontSize='large'/>
                </div>
                <p className='success-text'>Order placed successfully!</p>
            </div>
    )
}