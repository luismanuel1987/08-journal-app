import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../view'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Id dolor proident aliquip dolore dolore in reprehenderit deserunt labore. Irure est ad laborum velit non ipsum ut enim in nostrud anim Lorem. In culpa ullamco sint commodo reprehenderit duis.</Typography> */}
      
      {/* NothingSelected */}
      <NothingSelectedView />

      {/* NoteView */}
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{ 
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity:0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        
        }}
      >

        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>

    </JournalLayout> 
  )
}
