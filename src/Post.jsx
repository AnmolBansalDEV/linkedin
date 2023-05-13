import React,{forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({name, description, message, photourl}, ref) => {

  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photourl}>{name && name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="grey" />
            <InputOption Icon={CommentOutlinedIcon} title="Comment" color="grey" />
            <InputOption Icon={LoopOutlinedIcon} title="Repost" color="grey" />
            <InputOption Icon={SendOutlinedIcon} title="Send" color="grey" />
        </div>
    </div>
    
  )
})

export default Post