import { useSelector, useDispatch } from 'react-redux'
import * as types from '../store/profile/types'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export function ProfilePage() {
  const visible = useSelector((store) => store.visible)


  const dispatch = useDispatch()


  const hendleChange = () => {
    dispatch({ type: types.CHANGE_VISIBLE, payload: !visible })
    console.log(visible)
  }

  return (
    <>
      <h1>ProfilePage</h1>
      <h2 hidden={visible}>Visible</h2>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Скрыть надпись Visible" onClick={hendleChange} />
      </FormGroup>
    </>
  )
}