import React from 'react'
import { showFormattedDate } from '../utils'

export default function NoteHeader({title, createdAt}) {
  return (
    <div className='border-b border-black'>
        <p className='font-semibold'>{title}</p>
        <p className='text-xs font font-light'>{showFormattedDate(createdAt)}</p>
    </div>
  )
}
