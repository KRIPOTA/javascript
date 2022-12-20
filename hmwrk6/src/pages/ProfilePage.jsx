import { useSelector, useDispatch } from 'react-redux'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { toggleProfile } from '../store/profile/actions'
import { selectVisible } from '../store/profile/selectors'


export function ProfilePage() {
  const visible = useSelector(selectVisible)
  const dispatch = useDispatch()

  return (
    <>
      <h1>ProfilePage</h1>
      <h2 hidden={visible}>Visible</h2>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Скрыть надпись Visible" onClick={() => dispatch(toggleProfile())} />
      </FormGroup>
    </>
  )
}